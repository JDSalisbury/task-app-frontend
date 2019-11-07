import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ExpoLinksView} from '@expo/samples';
import {styles} from './styles/layout'


const StatsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Name:</Text>
      <Text>Point Total:</Text>
      <Text>Assigned Task:</Text>
      <Text>Life Time Points:</Text>
      <ExpoLinksView />
    </ScrollView>
  );
}

StatsScreen.navigationOptions = {
  title: 'Links',
};


export default StatsScreen;