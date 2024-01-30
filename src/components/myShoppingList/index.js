import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import MyShoppingListProduct from '../myShoppingListProduct';
import { useMyShoppingList } from '../../hooks/useMyShoppingList';
import { useProductsStore } from '../../store/useProductsStore';
import { theme } from '../../styles/theme';
import { useMyShoppingListMutation } from '../../hooks/useMyShoppingListMutation';

export default function MyShoppingList() {

    const { data } = useMyShoppingList();

    const { deleteMutation } = useMyShoppingListMutation();

    const isLoading = useProductsStore((state) => state.addProductIsLoading);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>my shopping list</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatListStyle}
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                keyExtractor={item => `${item.productkey}-${item.product}`}
                renderItem={({ item }) => {
                    return <MyShoppingListProduct {...item} deleteMutation={deleteMutation} />
                }}
            />
            {isLoading === 'bloquear' || deleteMutation.isLoading ? <View
                style={{
                    backgroundColor: 'gray',
                    opacity: 0.8,
                    position: 'absolute',
                    top: theme.spacing.pp + theme.size.windowHeight * 0.04,
                    bottom: theme.spacing.pp,
                    left: theme.spacing.pp,
                    right: theme.spacing.pp,
                }}
            /> : null}
            {isLoading === 'bloquear' || deleteMutation.isLoading ? <ActivityIndicator size={'large'} color={theme.color.highlightColor2} style={{
                position: 'absolute',
            }} /> : null}
        </View>
    );
}