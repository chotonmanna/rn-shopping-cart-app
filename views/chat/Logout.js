import React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {SharedServices} from '../../services/SharedServices';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.sharedService = SharedServices();
  }

  leaveChatRoom = () => {
    Alert.alert(
      'Leave Chat Room',
      'Are you sure to leave chat room ?',
      [
        {
          text: 'Cencel',
          style: 'cancel'
        },
        {
          text: 'Proceed',
          onPress: () => {
            this.sharedService.removeItem('chatUser');
            this.props.navigation.navigate('Home');
          }
        }
      ]
    );
  }

  render() {
    return (
      <View style={{marginRight: 10}}>
        <TouchableOpacity onPress={this.leaveChatRoom.bind(this)}>
          <Ionicons name="md-log-out" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Logout;
