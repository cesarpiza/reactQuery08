import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    StatusBar,
} from 'react-native';
import Home from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <StatusBar hidden />
                <Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Screen
                        name='Home'
                        component={Home}
                    />
                </Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}