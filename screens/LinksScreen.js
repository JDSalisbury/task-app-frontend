import React from 'react';
import { ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {styles} from './styles/layout'


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};


