import React from 'react';
import {
    ActivityIndicator,
    Alert,
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useMyShoppingListMutation } from '../../hooks/useMyShoppingListMutation';
import { useProductsStore } from '../../store/useProductsStore';
import { theme } from '../../styles/theme';
import { useQueryClient } from 'react-query';

export default function ProductAddButton() {

    const queryClient = useQueryClient();

    const selectedItem = useProductsStore((state) => state.selectedItem);

    const { addMutation } = useMyShoppingListMutation();

    return (
        <TouchableOpacity
            style={styles.button}
            disabled={addMutation.isLoading}
            onPress={() => {
                if (selectedItem === 0) {
                    Alert.alert('', 'Please select a product!');
                    return;
                }

                const getMyShoppingListData = queryClient.getQueryData('myList');

                const getProductData = queryClient.getQueryData('products');

                const getProductById = getProductData.filter((product) => product.id === selectedItem)[0];

                const chechIfItemExistsInTheMyShoppingListData = getMyShoppingListData.some((product) => product.productkey === getProductById.productkey);

                if (chechIfItemExistsInTheMyShoppingListData) {
                    Alert.alert('', 'Produto já inserido na lista!')
                } else {
                    addMutation.mutate({ selectedItem });
                }
            }}
        >
            <Text style={[styles.buttonText, {
                color: addMutation.isLoading ? theme.color.defaultColor4 : theme.color.defaultColor1,
            }]}>add product</Text>
        </TouchableOpacity>
    );
}