import React, { useEffect, useState } from 'react';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SwipeScreen from '../screens/SwipeScreen';
import AssemblyScreen from '../screens/AssemblyScreen';
import LoadingScreen from '../screens/LoadingScreen';
import PartyScreen from '../screens/PartyScreen';
import ExplorePartyScreen from '../screens/ExplorePartyScreen';
import ThemeCardScreen from '../screens/ThemeCardScreen';
import ExploreThemeCardScreen from '../screens/ExploreThemeCardScreen';
import PartyListScreen from '../screens/PartyListScreen';
import ThemeIdeaScreen from '../screens/ThemeIdeaScreen';
import ProfilePartyScreen from '../screens/ProfilePartyScreen';
import ProfilePartyListScreen from '../screens/ProfilePartyListScreen';
import ProfileThemeCardScreen from '../screens/ProfileThemeCardScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    });
    return (
        <Stack.Navigator>
            {!isLoaded ? (
                <Stack.Screen
                    name='LoadingScreen'
                    component={LoadingScreen}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
            ) : (
                <>
                    <Stack.Screen
                        name='BottomNavigator'
                        component={BottomNavigator}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name='SwipeScreen'
                        component={SwipeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='AssemblyScreen'
                        component={AssemblyScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name='ExploreScreen'
                        component={ExploreScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name='ProfileScreen'
                        component={ProfileScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};

const AssemblyStackNavigator = createNativeStackNavigator();

export const AssemblyStack = () => (
    <AssemblyStackNavigator.Navigator initialRouteName='AssemblyScreen'>
        <AssemblyStackNavigator.Screen
            name='AssemblyScreen'
            component={AssemblyScreen}
            options={{ headerShown: false }}
        />
        <AssemblyStackNavigator.Screen name='PartyScreen' component={PartyScreen} options={{ headerShown: false }} />
        <AssemblyStackNavigator.Screen
            name='ThemeCardScreen'
            component={ThemeCardScreen}
            options={{ headerShown: false }}
        />
    </AssemblyStackNavigator.Navigator>
);

const ExploreStackNavigator = createNativeStackNavigator();

export const ExploreStack = () => (
    <ExploreStackNavigator.Navigator initialRouteName='ExploreScreen'>
        <ExploreStackNavigator.Screen name='ExploreScreen' component={ExploreScreen} options={{ headerShown: false }} />
        <ExploreStackNavigator.Screen
            name='ExplorePartyScreen'
            component={ExplorePartyScreen}
            options={{ headerShown: false }}
        />
        <ExploreStackNavigator.Screen
            name='ExploreThemeCardScreen'
            component={ExploreThemeCardScreen}
            options={{ headerShown: false }}
        />
        <ExploreStackNavigator.Screen
            name='PartyListScreen'
            component={PartyListScreen}
            options={{ headerShown: false }}
        />
        <ExploreStackNavigator.Screen
            name='ThemeIdeaScreen'
            component={ThemeIdeaScreen}
            options={{ headerShown: false }}
        />
    </ExploreStackNavigator.Navigator>
);

const ProfileStackNavigator = createNativeStackNavigator();

export const ProfileStack = () => (
    <ProfileStackNavigator.Navigator initialRouteName='ProfileScreen'>
        <ProfileStackNavigator.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        <ProfileStackNavigator.Screen
            name='ProfilePartyListScreen'
            component={ProfilePartyListScreen}
            options={{ headerShown: false }}
        />
        <ProfileStackNavigator.Screen
            name='ProfilePartyScreen'
            component={ProfilePartyScreen}
            options={{ headerShown: false }}
        />
        <ProfileStackNavigator.Screen
            name='ProfileThemeCardScreen'
            component={ProfileThemeCardScreen}
            options={{ headerShown: false }}
        />
    </ProfileStackNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const BottomNavigator = (props) => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName='Swipe'
            screenOptions={{
                tabBarStyle: {
                    height: '12%',
                },
            }}
        >
            <Tab.Screen
                name='Swipe'
                component={SwipeScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        const iconName = 'how-to-vote';
                        const iconSize = 35;
                        const iconColor = focused ? '#f91d45' : '#7B7B7B';
                        return <MaterialIcons name={iconName} size={iconSize} color={iconColor} />;
                    },
                }}
            />
            <Tab.Screen
                name='Assembly'
                component={AssemblyStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        const iconName = 'account-balance';
                        const iconSize = 35;
                        const iconColor = focused ? '#f91d45' : '#7B7B7B';
                        return <MaterialIcons name={iconName} size={iconSize} color={iconColor} />;
                    },
                }}
            />
            <Tab.Screen
                name='Explore'
                component={ExploreStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        const iconName = 'list';
                        const iconSize = 35;
                        const iconColor = focused ? '#f91d45' : '#7B7B7B';
                        return <Entypo name={iconName} size={iconSize} color={iconColor} />;
                    },
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        const iconName = 'person';
                        const iconSize = 35;
                        const iconColor = focused ? '#f91d45' : '#7B7B7B';
                        return <MaterialIcons name={iconName} size={iconSize} color={iconColor} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default AppStack;
