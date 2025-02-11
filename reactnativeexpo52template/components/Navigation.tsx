import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SpeakersNavigator from '@/components/SpeakersNavigator';
import { Ionicons } from '@expo/vector-icons';
import { Image, View } from 'react-native';

interface NavigationProps {
  conferenceName: string;
  from: string;
  to: string;
  speakers: { name: string; image: string }[];
}

const Tab = createBottomTabNavigator();
const homeIcon = require("@/assets/images/companion_icon.png");

const Navigation: React.FC<NavigationProps> = ({ conferenceName, from, to, speakers }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator id={undefined}
        initialRouteName="Accueil"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Accueil') {
              return (
                <Image
                  source={homeIcon}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? color : undefined,
                  }}
                />
              );
            } else if (route.name === 'Speakers') {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Speakers"
          component={SpeakersNavigator}
          initialParams={{ speakers }}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Accueil"
          component={HomeScreen}
          initialParams={{ conferenceName, from, to }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;