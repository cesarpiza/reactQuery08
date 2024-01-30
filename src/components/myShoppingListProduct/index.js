import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { useProductsStore } from '../../store/useProductsStore';

export default function MyShoppingListProduct(props) {

    const isLoading = useProductsStore((state) => state.addProductIsLoading);

    const {
        id,
        productkey,
        product,
        price,
        avatar,
        deleteMutation,
    } = props;

    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.avatar}
                source={{ uri: avatar }}
            />
            <View style={styles.productAndPriceContainer}>
                <Text style={styles.product}>{product}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <TouchableOpacity
                disabled={isLoading === false ? false : isLoading === 'bloquear' ? true : false}
                style={[styles.closedButton, {
                    backgroundColor: isLoading === false ? theme.color.highlightColor4 : isLoading === 'bloquear' ? theme.color.defaultColor4 : theme.color.highlightColor4,
                }]}
                onPress={() => {
                    deleteMutation.mutate({ id });
                }}
            >
                <Text
                    style={styles.closedButtonText}
                >
                    X
                </Text>
            </TouchableOpacity>
        </View>
    );
}