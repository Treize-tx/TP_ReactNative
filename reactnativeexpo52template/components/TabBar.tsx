import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SpeakersScreen from '@/screens/SpeakersScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator id={undefined}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Speakers" component={SpeakersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;