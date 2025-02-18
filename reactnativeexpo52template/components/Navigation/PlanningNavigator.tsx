import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Day } from '../Planning/Day';
import {useState} from 'react';
import { getPlanningForDay } from '@/res/PlanningService';
import { Planning } from '@/model/Planning';
import { RouteProp } from '@react-navigation/native';

interface PlanningNavigatorProps {
  route: RouteProp<{ params: { plannings: any } }, 'params'>;
}

export const PlanningNavigator: React.FC<PlanningNavigatorProps> = ({ route }) => {
    const Tab = createMaterialTopTabNavigator();
    
    return (
      <Tab.Navigator id={undefined}>
      {route.params.plannings.map((planning, index) => (
        <Tab.Screen
          key={index}
          name={`Day${index + 1}`}
          component={Day}
          initialParams={{ planning }}
        />
      ))}
    </Tab.Navigator>
    );
}

