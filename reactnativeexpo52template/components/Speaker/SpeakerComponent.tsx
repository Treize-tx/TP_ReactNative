import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type SpeakerProps = { name: string, image: string };

export const SpeakerComponent = ({ name, image }: SpeakerProps) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <Text style={styles.text}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 20,
    marginLeft: 'auto',
  },
});