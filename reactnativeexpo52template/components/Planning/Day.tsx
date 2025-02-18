import { Planning } from '@/model/Planning';
import React from 'react';
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface DayProps {
    route: {
      params: {
        planning: Planning;
      };
    };
  }

export const Day = ({ route }: DayProps) => {
  const { planning } = route.params;
  return (
    <SafeAreaView>
      <Text>{planning.to.toString()}</Text>
    </SafeAreaView>
  );
};
    