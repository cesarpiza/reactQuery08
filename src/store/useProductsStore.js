import { create } from "zustand";

const initialState = {
    selectedItem: 0,
    addProductIsLoading: false,
}

export const useProductsStore = create(() => initialState);

export const setSelectedItem = (id) => useProductsStore.setState(() => ({
    selectedItem: id,
}));

export const setAddProductIsLoading = (value) => useProductsStore.setState(() => {
    return {
        addProductIsLoading: value,
    }
});