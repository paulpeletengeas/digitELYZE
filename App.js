import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Router from './src/router';

const App = () => (
    <SafeAreaProvider>
        <ActionSheetProvider>
            <NavigationContainer>
                <Provider>
                    <StatusBar style='dark' />
                    <Router />
                </Provider>
            </NavigationContainer>
        </ActionSheetProvider>
    </SafeAreaProvider>
);

export default App;
