import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Product from './pages/Product/Product';
import Details from './pages/Details/Details';
import SearchPage from './pages/SearchPage/SearchPage';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ProductStackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product Screen"
        component={Product}
        options={{
          title: 'STORE AWESOME-UI',
          headerTitleStyle: {fontFamily: 'aria'},
        }}
      />
      <Stack.Screen
        name="Details Screen"
        component={Details}
        options={{
          title: 'Product Details',
          headerTitleStyle: {fontFamily: 'aria'},
          headerBackTitleVisible: false,
          headerStyle: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="Product Screen" component={ProductStackScreens} />
        <Tabs.Screen name="Search Page" component={SearchPage} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Router;
