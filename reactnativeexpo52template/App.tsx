import React, {useCallback} from "react";
import {useFonts} from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet, Text, Image} from "react-native";
import {Colors} from "@/constants/Colors";
import { format } from 'date-fns'
import { CONFERENCE_DATA, PLANNING_DATA, SPEAKERS_DATA } from "./res/Stub";

export default function App() {

    const [fontsLoaded] = useFonts({
        'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf')
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
            <SafeAreaView style={{
                flex: 0, backgroundColor: Colors.light.background
            }}
                          onLayout={onLayoutRootView}/>
            <SafeAreaView style={[styles.container, {
                backgroundColor: Colors.light.background
            }]}
                          onLayout={onLayoutRootView}>
                <StatusBar barStyle={'dark-content'}/>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>{CONFERENCE_DATA.name}</Text>
                <Text style={styles.text}>{format(CONFERENCE_DATA.from, "EE d MMM yyyy  ")}</Text>
                <Text style={styles.text}>{format(CONFERENCE_DATA.to, "EE d MMM yyyy  ")}</Text>
                <Text style={styles.text}>{SPEAKERS_DATA[0].name}</Text>
                <Image style={{height: 150, width: 150}} source={{uri: SPEAKERS_DATA[0].image}}/>
                <Text style={styles.text}>{PLANNING_DATA.length}</Text>
                <Text style={styles.text}>{PLANNING_DATA[0].slots[0].type()}</Text>
                <Text style={styles.text}>{PLANNING_DATA[1].slots[0].type()}</Text>
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
        marginTop: 50
    },
    text: {
        fontSize: 42
    }
});
