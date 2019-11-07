import React,  {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {styles} from './styles/layout'
import { TouchableOpacity } from 'react-native-gesture-handler';


const TasksScreen = () => { 
  const [counter, setCounter ] = useState(0);



   const increaseCounter = () => {
    setCounter(counter + 1)
  }

   const decreaseCounter = () => {
    setCounter(counter -1)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => {increaseCounter()}}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{counter}</Text>
        <TouchableOpacity onPress={() =>{decreaseCounter()}}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

TasksScreen.navigationOptions = {
  title: 'Tasks',
};

export default TasksScreen;