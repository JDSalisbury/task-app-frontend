import React,  {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {styles} from './styles/layout'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {addToCounter, removeFromCounter, getAPokemon} from '../redux/actions/counter.actions'

const TasksScreen = ({counter, addToCounter, removeFromCounter, getAPokemon}) => { 

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => {addToCounter()}}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{counter.counter}</Text>
        <TouchableOpacity onPress={() =>{removeFromCounter()}}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>

      </View>
        <TouchableOpacity onPress={()=>{getAPokemon()}}>
          <Text>Whos that Pokemon</Text>
        </TouchableOpacity>
        <Text>-</Text>
        <Text>{counter.pokemon && counter.pokemon.name}</Text>
    </ScrollView>
  );
}

TasksScreen.navigationOptions = {
  title: 'Tasks',
};

export default connect(
  ({counter})=>({counter}),
  {addToCounter, removeFromCounter, getAPokemon}
)(TasksScreen);