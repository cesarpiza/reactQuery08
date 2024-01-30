import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useSupermarket } from '../../hooks/useProducts';
import SupermarketProduct from '../supermarketProduct';
import { theme } from '../../styles/theme';

export default function ProductsList() {

    const { data } = useSupermarket();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>supermarket</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatListStyle}
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <SupermarketProduct
                        {...item}
                        disabled={false}
                    />
                }}
            />
        </View>
    );
}