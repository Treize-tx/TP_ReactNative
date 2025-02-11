import React, { useCallback } from "react";
import { fr } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { format } from "date-fns";
import { CONFERENCE_DATA, PLANNING_DATA, SPEAKERS_DATA } from "./res/Stub";
import { HomeScreen } from "./screens/HomeScreen";
import { Speaker } from "./model/Speaker";
import { SpeakersScreen } from "./screens/SpeakersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./components/Navigation/Navigation";
import { SpeakersNavigator } from "./components/Navigation/SpeakersNavigator";

export default function App() {
  setDefaultOptions({ locale: fr });

  const [fontsLoaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: Colors.light.background,
        }}
        onLayout={onLayoutRootView}
      />
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: Colors.light.background,
          },
        ]}
        onLayout={onLayoutRootView}
      >
        <StatusBar barStyle={"dark-content"} />
        <Navigation
          conferenceName={CONFERENCE_DATA.name}
          from={format(CONFERENCE_DATA.from, "EE d MMM")}
          to={format(CONFERENCE_DATA.to, "EE d MMM yyyy")}
          speakers={SPEAKERS_DATA}
          plannings={PLANNING_DATA[0].slots[0].type()}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  helloworld: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 42,
  },
});
