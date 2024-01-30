import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { setSelectedItem, useProductsStore } from '../../store/useProductsStore';

export default function SupermarketProduct(props) {

    const selectedItem = useProductsStore((state) => state.selectedItem);

    const {
        id,
        productKey,
        product,
        price,
        avatar,
        selectedItems,
        purchasedItems,
    } = props;

    return (
        <TouchableOpacity
            style={[styles.container, {
                backgroundColor: selectedItem === id ? theme.color.highlightColor2 : theme.color.defaultColor2,
            }]}
            onPress={() => {
                if (selectedItem === id) {
                    setSelectedItem(0);
                } else {
                    setSelectedItem(id);
                }
            }}
        >
            <Image
                style={styles.avatar}
                source={{ uri: avatar }}
            />
            <View style={styles.productAndPriceContainer}>
                <Text style={styles.product}>{product}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
}