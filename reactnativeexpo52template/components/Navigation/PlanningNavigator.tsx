import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Day } from '../Planning/Day';
import { differenceInDays, addDays } from 'date-fns';
import { PLANNING_DATA } from '@/res/Stub';

export const PlanningNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    const plannings = PLANNING_DATA;

    return (
        <Tab.Navigator id={undefined}>
            <Tab.Screen
                name="Jour 1"
                component={Day}
                initialParams={{ planning: plannings[0] }}>
            </Tab.Screen>
        </Tab.Navigator>
    );
};