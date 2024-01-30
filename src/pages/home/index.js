import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import ProductsList from '../../components/productsList';
import MyShoppingList from '../../components/myShoppingList';
import ProductAddButton from '../../components/productAddButton';

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ProductsList />
            <ProductAddButton />
            <MyShoppingList />
        </SafeAreaView>
    );
}