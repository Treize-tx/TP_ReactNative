import React, {useCallback} from "react";
import {useFonts} from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Colors} from "@/constants/Colors";

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
                <View style={styles.helloworld}>
                    <Text style={styles.text}>hell World !</Text>
                </View>
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
