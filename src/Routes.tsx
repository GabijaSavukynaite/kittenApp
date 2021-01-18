import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { KittenDescriptionScreen } from './screens/KittenDescriptionScreen';
import { KittenInfo, ImageSize } from './types';

export type RootStackParamList = {
    Home: undefined,
    KittenDescription: KittenInfo & ImageSize
}

const Stack = createStackNavigator();

export const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#BE3E35',  
                }
            }}
            initialRouteName="Home"
        >
            <Stack.Screen options={{headerTitle: "Kittens"}} name="Home" component={HomeScreen} />
            <Stack.Screen options={{headerTitle: "Kitten Info"}} name="KittenDescription" component={KittenDescriptionScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
