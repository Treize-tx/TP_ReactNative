import React from 'react';
import SpeakersScreen from '@/screens/SpeakersScreen';
import HomeScreen from '@/screens/HomeScreen';
import Speaker from "@/views/Speaker";
import {createStackNavigator} from "@react-navigation/stack";

export default function StackNavigation() {
  const Stack = createStackNavigator();
      <Stack.Navigator initialRouteName="Acceuil" id={undefined}>
        <Stack.Screen name="Acceuil" component={HomeScreen}/>
        <Stack.Screen name="Speaker" component={Speaker}/>
        <Stack.Screen name="Speakers" component={SpeakersScreen}/>
      </Stack.Navigator>
}