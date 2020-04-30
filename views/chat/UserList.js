import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import io from 'socket.io-client';
import { Ionicons } from '@expo/vector-icons';
import Logout from './Logout';
import {SharedServices} from '../../services/SharedServices';
import { showMessage } from "react-native-flash-message";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientList: []
    };
    this.sharedService = SharedServices();
    this.socket = null;
  }

  componentDidMount() {
    const {navigation} = this.props;
    const chatUser = this.sharedService.getItem('chatUser');
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={{marginLeft: 10, flexDirection: 'row'}}>
            <Ionicons 
              name="ios-chatbubbles" 
              size={25} 
              color="#FFF"
            />
            <Text style={{fontSize: 18, color: '#FFF', marginLeft: 5}}>Welcome {chatUser.fname}</Text>
          </View>
        );
      },
      headerRight: () => <Logout navigation={navigation} />
    });

    this.receivedSocketResponse();
  }

  receivedSocketResponse = () => {
    this.socket = io('https://chat-server-app89.herokuapp.com', {
      transports: ['websocket'],
    });
    this.sharedService.setItem('socket', this.socket);
    const chatUser = this.sharedService.getItem('chatUser');
    showMessage({
      message: 'Connection Failed',
      description: 'Your chat server is not connected successfully',
      type: 'danger',
      icon: 'danger',
      position: 'bottom'
    });

    this.socket.on('connect', () => {
      showMessage({
        message: 'Connected',
        description: 'Your chat server is connected successfully',
        type: 'success',
        icon: 'success',
        position: 'bottom'
      });
      this.socket.emit('UPDATE SOCKET USERS', chatUser);
    });

    this.socket.on('UPDATE SOCKET USERS', (clientList) => {
      clientList = clientList.filter(client => {
        return client.id !== chatUser.id;
      });
      this.setState({ clientList });
    });
  }

  displayNameInitial = ({fname, lname}) => {
    return fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase();
  }

  renderUserList = ({item}) => {
    return (
      <TouchableOpacity 
        activeOpacity={0.6} 
        onPress={() => this.props.navigation.navigate('UserChat', {withUser: item})}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Avatar 
              rounded 
              title={this.displayNameInitial(item)} 
              size="medium" 
              overlayContainerStyle={{backgroundColor: '#2e8b57'}}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.topPart}>
              <Text style={styles.userName}>{item.fname} {item.lname}</Text>
              <Text style={styles.userTime}>1 min ago</Text>
            </View>
            <View style={styles.topPart}>
              <Text style={styles.currentMsg}>How are you bro ?</Text>
              <Badge value="2" status="success" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  render() {
    const {clientList} = this.state;
    return (
      <View style={{backgroundColor: '#d3d3d3', height: '100%'}}>
        <View style={styles.screen}>
          <FlatList 
            keyExtractor={(item) => item.id}
            data={clientList}
            renderItem={this.renderUserList.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 17,
    flexDirection: 'column'
  },
  container: {
    flexDirection: 'row',
    height: 75,
    width: '100%',
    paddingTop: 8
  },
  leftContainer: {
    width: '15%'    
  },
  rightContainer: {
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    paddingLeft: 5
  },
  topPart: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#708090'
  },
  userTime: {
    color: '#808080'
  },
  currentMsg: {
    color: '#AAA',
    fontStyle: 'italic'
  }
});

export default UserList;
