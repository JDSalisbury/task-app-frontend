import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ExpoLinksView} from '@expo/samples';
import {styles} from './styles/layout'


export default function StatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Name:</Text>
      <Text>Point Total:</Text>
      <Text>Assigned Task:</Text>
      <ExpoLinksView />
    </ScrollView>
  );
}

StatsScreen.navigationOptions = {
  title: 'Links',
};


