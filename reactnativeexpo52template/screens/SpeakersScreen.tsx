import React from 'react';
import { FlatList, View, StyleSheet, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Speaker } from '../model/Speaker';
import { Colors } from '@/constants/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SpeakerComponent } from '@/components/SpeakerComponent';
import { RootStackParamList } from '@/types/RootStack';

interface SpeakersScreenProps {
  speakers: Speaker[];
}

export const SpeakersScreen: React.FC<SpeakersScreenProps> = ({ speakers }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.list}
          data={speakers}
          renderItem={({ item }) => 
            <TouchableHighlight onPress={() => navigation.navigate("Speaker", { speaker: item })}>
              <SpeakerComponent name={item.name} image={item.image}/>
            </TouchableHighlight>}
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