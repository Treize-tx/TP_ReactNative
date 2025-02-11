import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@/screens/HomeScreen";
import { SpeakersNavigator } from "@/components/Navigation/SpeakersNavigator";
import { Image, View, StyleSheet } from "react-native";
import PlanningNavigator from "../Planning/PlanningNavigator";
import { Planning } from '@/model/Planning';

interface NavigationProps {
  conferenceName: string;
  from: string;
  to: string;
  speakers: { name: string; image: string }[];
  plannings: string;
}

const Tab = createBottomTabNavigator();
const homeIcon = require("@/assets/images/companion_icon.png");
const speakersIcon = require("@/assets/images/speakers.png");
const planningIcon = require("@/assets/images/planning.png")

export const Navigation: React.FC<NavigationProps> = ({
  conferenceName,
  from,
  to,
  speakers,
  plannings,
}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        id={undefined}
        initialRouteName="Accueil"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            if (route.name === "Accueil") {
              return (
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: focused ? color : "light blue" },
                  ]}
                >
                  <Image source={homeIcon} style={styles.homeIcon} />
                </View>
              );
            } else if (route.name === "Speakers") {
              return <Image source={speakersIcon} style={styles.icon} />;
            } else if (route.name === "Planning") {
              return <Image source={planningIcon} style={styles.icon} />;
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
        <Tab.Screen
          name="Planning"
          component={PlanningNavigator}
          initialParams={{ plannings }}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  homeIcon: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  icon: {
    width: 20,
    height: 20,
  },
});