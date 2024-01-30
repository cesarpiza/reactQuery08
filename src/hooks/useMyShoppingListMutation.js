import axios from "axios";
import { useEffect, useRef } from "react";
import { Alert, LogBox } from "react-native";
import { useMutation, useQueryClient } from "react-query";
import { setAddProductIsLoading } from '../store/useProductsStore';

LogBox.ignoreLogs(['Request failed with status code 400']);

export function useMyShoppingListMutation() {
    const queryClient = useQueryClient();

    const source = axios.CancelToken.source();

    const addMutation = useMutation({
        mutationFn: async ({ selectedItem: id }) => {
            const delay = await new Promise((resolve,) => setTimeout(() => {
                resolve();
            }, 500));

            const getProductData = queryClient.getQueryData('products');

            const getProductById = getProductData.filter((product) => product.id === id)[0];

            const { data } = await axios.post(`https://65b2ff169bfb12f6eafe943c.mockapi.io/mylist`, {
                ...getProductById,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                cancelToken: source.token,
            });

            return data;
        },
        onMutate: ({ selectedItem: id }) => {
            const getProductData = queryClient.getQueryData('products');

            const getProductById = getProductData.filter((product) => product.id === id)[0];

            const previousProduct = queryClient.getQueryData('myList');

            queryClient.setQueryData('myList', (currentData) => {
                return [...currentData, { ...getProductById }]
            });

            return previousProduct;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('myList');
        },
        onError: (error, { selectedItem: id }, context) => {
            console.log(error?.message);

            queryClient.setQueryData('myList', () => {
                return [...context]
            })
        },
    });

    const firstReading = useRef(false);

    useEffect(() => {
        if (firstReading.current) {
            if (addMutation.isLoading === true) {
                setAddProductIsLoading('bloquear');
            } else if (addMutation.isLoading === false) {
                setAddProductIsLoading('liberar');
            }
        }

        firstReading.current = true;
    }, [addMutation.isLoading]);

    const deleteMutation = useMutation({
        mutationFn: async ({ id }) => {
            const delay = await new Promise((resolve,) => setTimeout(() => {
                resolve();
            }, 500));

            const { data } = await axios.delete(`https://65b2ff169bfb12f6eafe943c.mockapi.io/mylist/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return data;
        },
        onMutate: async ({ id }) => {
            const getMyShoppingListData = queryClient.getQueryData('myList');

            const deleteProductByIdInTheMyShoppingList = getMyShoppingListData.filter((product) => product.id !== id);

            queryClient.setQueryData('myList', () => {
                return [...deleteProductByIdInTheMyShoppingList]
            });

            return getMyShoppingListData;
        },
        onSuccess: () => {

        },
        onError: (data, mutateData, context) => {
            queryClient.setQueryData('myList', () => {
                return [...context]
            })
        }
    })

    return { addMutation, deleteMutation };
}
