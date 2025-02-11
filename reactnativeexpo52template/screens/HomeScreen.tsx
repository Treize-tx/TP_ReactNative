import { Hall32 } from "@/model/Configuration";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


export const HomeScreen = ({ route }) => {
    const { conferenceName, from, to } = route.params;
    return (
        <View style={styles.helloworld}>
             <Text style={styles.title}> {conferenceName} </Text>
             <Text> {"Du " + from + " au " + to} </Text>
             <View style={styles.spacer} />
             <Text> Hall 32 </Text>
             <View style={styles.spacer} />
             <Image source={Hall32.image} style={{ width: 300, height: 300 }} />
             <Text style={styles.address}> {Hall32.address} </Text>
            </View> 
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
    title: {
        fontSize: 42,
        fontWeight: "bold",
    },
    address: {
        fontStyle: "italic",
    },
    spacer: {
        height: 10,
    }
});