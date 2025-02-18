import React from "react";
import { SpeakersScreen } from "@/screens/SpeakersScreen";
import { Speaker } from "@/views/Speaker";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { RouteProp } from '@react-navigation/native';

type SpeakersNavigatorProps = {
  route: RouteProp<{ params: { speakers: any } }, 'params'>;
};

export const SpeakersNavigator = ({ route }: SpeakersNavigatorProps) => {
  const { speakers } = route.params;
  return (
    <Stack.Navigator initialRouteName="Speakers" id={undefined}>
      <Stack.Screen name="Speakers">
        {props => <SpeakersScreen {...props} speakers={speakers} />}
      </Stack.Screen>
      <Stack.Screen name="Speaker" component={Speaker} />
    </Stack.Navigator>
  );
}