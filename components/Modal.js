import React from 'react'
import { Overlay } from 'react-native-elements';
import {connect} from 'react-redux'
import {Text} from 'react-native';
import {closeOverlay} from '../redux/actions/layout.actions'

const Modal = ({layoutStore, closeOverlay}) => {
return(

    <Overlay
      isVisible={layoutStore.showOverlay}
      onBackdropPress={() => closeOverlay()}
    >
      <Text>Hello from Overlay!</Text>
    </Overlay>

    )


}

export default connect(
    ({layoutStore})=>({layoutStore}),
    {closeOverlay}
)(Modal);