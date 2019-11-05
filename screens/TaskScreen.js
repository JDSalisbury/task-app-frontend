import React from 'react';
import { ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {styles} from './styles/layout'

export default function TasksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoTasksView and replace it with your content;
       * we just wanted to provide you with some helpful Tasks.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

TasksScreen.navigationOptions = {
  title: 'Tasks',
};
