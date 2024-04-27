import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from '@typings/navigation.type';
import HomeScreen from '@screens/HomeScreen';

const MainRouterNavigator = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <MainRouterNavigator.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <MainRouterNavigator.Screen name='HomeScreen' component={HomeScreen} />
    </MainRouterNavigator.Navigator>
  );
};
