import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface SpeakerProps {
    route: any;
}

const Speaker: React.FC<SpeakerProps> = ({ route }) => {
    const { speaker } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: speaker._image }} style={styles.image} />
            <Text style={styles.name}>{speaker._name}</Text>
            <Text style={styles.description}>{speaker._description}</Text>
            <Text style={styles.social}>LinkedIn: {speaker._linkedin}</Text>
            <Text style={styles.social}>Twitter: {speaker._twitter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    social: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Speaker;