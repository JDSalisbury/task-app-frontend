import React from 'react'
import {Text, Overlay , Badge, ListItem, Button} from 'react-native-elements';
import {connect} from 'react-redux'
import {View} from 'react-native';
import {closeOverlay} from '../redux/actions/layout.actions'
import {styles} from './styles/overlay'

const Modal = ({layoutStore, closeOverlay}) => {
  const {item} = layoutStore;
return(
  <View style={styles.overlay}>
    <Overlay
      isVisible={layoutStore.showOverlay}
      onBackdropPress={() => closeOverlay()}
      height='auto'
    >
   
    <ListItem 
      key={item.id} 
      title={<Text h4>{item.name}</Text>}
      bottomDivider
      rightIcon={{raised: true, name: 'check', type:'font-awesome'}}
    />
    <Text>{item.description}</Text>
    <Text>Last time completed: {item.completed_on}</Text>
    <Text>Number of times completed: {item.times_completed}</Text>
    <Button title='Complete'/>

    </Overlay>

  </View>

    )


}

export default connect(
    ({layoutStore})=>({layoutStore}),
    {closeOverlay}
)(Modal);