import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SharedServices} from '../../services/SharedServices';
import UserList from './UserList';
import UserChat from './UserChat';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount = () => {
    const sharedService = SharedServices();
    const socket = sharedService.getItem('socket');
    if (socket) {
      socket.close();
    }
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          headerStyle: {
            height: 110,
            backgroundColor: '#008b8b',   
          }
        }}>
        <Stack.Screen 
          name="UserList"
          component={UserList}
        />
        <Stack.Screen 
          name="UserChat"
          component={UserChat}
        />
      </Stack.Navigator>
    );    
  }
}

export default ChatRoom;
