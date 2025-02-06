import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SpeakerComponent from '@/components/SpeakerComponent';
import { Speaker } from '../model/Speaker';
import { Colors } from '@/constants/Colors';

interface SpeakerScreenProps {
  speakers: Speaker[];
}

const SpeakerScreen: React.FC<SpeakerScreenProps> = ({ speakers }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.list}
          data={speakers}
          renderItem={({ item }) => <SpeakerComponent name={item.name} image={item.image} />}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => (
            <View style={{ height: 2, backgroundColor: Colors.light.tint }} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default SpeakerScreen;