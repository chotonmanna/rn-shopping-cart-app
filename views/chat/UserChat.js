import React, { Component } from 'react';
import { View, Text, YellowBox, StyleSheet, TouchableOpacity, 
    TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Logout from './Logout';
import {SharedServices} from '../../services/SharedServices';

class UserChat extends Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Non-serializable values were found in the navigation state',
    ]);
    const chatdata = [
      { id: '1', text: '11 Lorem ipsum is the dummy text to display content.', position: 'left'},
      { id: '2', text: '22 Lorem ipsum is the dummy text to display content.', position: 'right'},
      { id: '3', text: '33 Lorem ipsum is the dummy text to display content.', position: 'left'},
      { id: '4', text: '44 Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.', position: 'right'},
      { id: '5', text: '55 Lorem ipsum is the dummy text to display content.', position: 'left'},
      { id: '6', text: '66 Lorem ipsum is the dummy text to display content.', position: 'right'},
      { id: '7', text: '77 Lorem ipsum is the dummy text to display content.', position: 'left'},
      { id: '8', text: '88 Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.', position: 'right'},
      { id: '9', text: '99 Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.Lorem ipsum is the dummy text to display content.', position: 'left'},
      { id: '10', text: '100 Lorem ipsum is the dummy text to display content.', position: 'right'},
    ];
    this.state = {
      text: '',
      data: []
    };

    this.sharedService = SharedServices();
  }

  displayNameInitial = ({ fname, lname }) => {
    return fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase();
  }

  componentDidMount = () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      headerTitle: () => {
        const { withUser } = route.params;
        return (
          <View style={{ flexDirection: 'row' }}>
            <Avatar
              rounded
              title={this.displayNameInitial(withUser)}
              size={45}
              overlayContainerStyle={{ backgroundColor: '#e9967a' }}
            />
            <Text style={{ fontSize: 20, color: '#FFF', margin: 8 }}>{withUser.fname} {withUser.lname}</Text>
          </View>
        );
      },
      headerRight: () => <Logout navigation={navigation} />
    });

    this.receivedSocketResponse();
  }

  receivedSocketResponse = () => {
    const socket = this.sharedService.getItem('socket');
    socket.on('SEND CHAT', (msg) => {
      console.log(msg);
      const {data} = this.state;
      data.reverse();
      data.push(msg);
      data.reverse();
      console.log('DATA', data);
      this.setState({data});
    });
  }

  renderChatText = ({item}) => {
    return (
      <View style={[styles.chatPanel, item.position === 'left' ? styles.leftPanel : styles.rightPanel]}>
        <Text>{item.text}</Text>
      </View>
    );
  }

  get btnDisabled() {
    const {text} = this.state;
    if (text) {
      return false;
    }
    return true;
  }

  sendMessage = () => {
    const socket = this.sharedService.getItem('socket');
    const {text, data} = this.state;
    const { withUser } = this.props.route.params;
    const chatUser = this.sharedService.getItem('chatUser');
    const id = ((new Date()).getTime()).toString();
    data.reverse();
    data.push({id, text, position: 'right'});
    data.reverse();
    this.setState({data, text: ''});

    // send chat msg to socket user
    socket.emit('SEND CHAT', {
      'from': chatUser.id,
      'to': withUser.id,
      'msg': { id, text, position: 'left' }
    });
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  render() {
    const {data, text} = this.state;
    return (
      <View style={styles.chatContainer}>
        <View style={styles.chatHistory}>        
          <FlatList 
            data={data}
            renderItem={this.renderChatText.bind(this)}
            inverted={-1}
          />
        </View>
        <View style={styles.chatInput}>
          <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
            <TextInput
              value={text}
              style={{paddingHorizontal: 20, fontSize: 18}}
              underlineColorAndroid="transparent"
              placeholder="Type a message.."
              onChangeText={(text) => this.setState({text})}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity onPress={this.sendMessage.bind(this)} disabled={this.btnDisabled}>
            <Ionicons name="md-send" size={50} color="#008b8b" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  chatHistory: {
    height: '90%',
    backgroundColor: '#d3d3d3'
  },
  chatInput: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  chatPanel: {
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
    borderRadius: 10,    
    maxWidth: '70%',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  leftPanel: {
    alignSelf: 'flex-start',
    backgroundColor: '#fffaf0'
  },
  rightPanel: {
    alignSelf: 'flex-end',
    backgroundColor: '#f5f5dc'
  }
});

export default UserChat;
