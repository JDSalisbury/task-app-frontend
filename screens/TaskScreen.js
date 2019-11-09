import React, {useEffect} from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import {styles} from './styles/layout'
import {connect} from 'react-redux'
import { ListItem } from 'react-native-elements'
import {showOverlay} from '../redux/actions/layout.actions'
import Modal from '../components/Modal';

const TasksScreen = ({taskStore, showOverlay}) => { 

  return (
    <ScrollView style={styles.container}>
        <View>
          {
            taskStore.tasks.map((task, i) =>(
              <ListItem
              key={i}
              title={task.name}
              badge={{ value: task.value, textStyle: { color: 'white' } }}

              bottomDivider
              chevron
              onPress={()=> showOverlay(task)}
              />
            ))
          }
        </View>
        <Modal/>

       
          
    </ScrollView>
  );
}

TasksScreen.navigationOptions = {
  title: 'Tasks',
};

export default connect(
  ({taskStore})=>({taskStore}),
  {showOverlay}
)(TasksScreen);