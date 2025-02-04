import React, {useCallback} from "react";
import {fr} from "date-fns/locale";
import setDefaultOptions from 'date-fns/setDefaultOptions';
import {useFonts} from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet, Text, Image, View} from "react-native";
import {Colors} from "@/constants/Colors";
import { format } from 'date-fns'
import { CONFERENCE_DATA, PLANNING_DATA, SPEAKERS_DATA } from "./res/Stub";
import HomeScreen from "./view/HomeScreen";
import { Speaker } from "./model/Speaker";
import SpeakerScreen from "./view/SpeakersScreen";

export default function App() {
    setDefaultOptions({locale: fr});
    
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
            {/* <SafeAreaView style={{
                flex: 0, backgroundColor: Colors.light.background
            }}
                          onLayout={onLayoutRootView}/>
            <SafeAreaView style={[styles.container, {
                backgroundColor: Colors.light.background
            }]}
                          onLayout={onLayoutRootView}>
                <StatusBar barStyle={'dark-content'}/>
                <View style={styles.helloworld}>
                    <Text style={styles.text}>Hello World !</Text>
                    <Text style={styles.text}>{CONFERENCE_DATA.name}</Text>
                    <Text style={styles.text}>{format(CONFERENCE_DATA.from, "EE d MMM yyyy  ")}</Text>
                    <Text style={styles.text}>{format(CONFERENCE_DATA.to, "EE d MMM yyyy  ")}</Text>
                    <Text style={styles.text}>{SPEAKERS_DATA[0].name}</Text>
                    <Image style={{height: 150, width: 150}} source={{uri: SPEAKERS_DATA[0].image}}/>
                    <Text style={styles.text}>{PLANNING_DATA.length}</Text>
                    <Text style={styles.text}>{PLANNING_DATA[0].slots[0].type()}</Text>
                    <Text style={styles.text}>{PLANNING_DATA[1].slots[0].type()}</Text>
                </View>
            </SafeAreaView>
            <HomeScreen 
                conferenceName={CONFERENCE_DATA.name} 
                from={format(CONFERENCE_DATA.from, "EE d MMM")} 
                to={format(CONFERENCE_DATA.to, "EE d MMM yyyy  ")}
            /> */}
            <SpeakerScreen
                speakers = {SPEAKERS_DATA}
            />
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
