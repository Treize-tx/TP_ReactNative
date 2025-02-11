import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Day1 } from './Day1';
import { Day2 } from './Day2';
import { getPlanningForDay } from '@/res/PlanningService';

interface PlanningNavigatorProps {
    
}

export default function PlanningNavigator() {
    const Tab = createMaterialTopTabNavigator();
    // const today = getPlanningForDay(date, planning[]);
    return (
        <Tab.Navigator id={undefined}>
          <Tab.Screen name="Day1" component={Day1} />
          <Tab.Screen name="Day2" component={Day2} />
        </Tab.Navigator>
    );
}

