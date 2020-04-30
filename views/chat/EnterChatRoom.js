import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import {SharedServices} from '../../services/SharedServices';
import Constants from 'expo-constants';

class EnterChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      fname: '',
      lname: ''
    };

    this.sharedService = SharedServices();
  }

  get btnDisabled() {
    const {fname, lname} = this.state;
    if (fname && lname) {
      return false;
    }
    return true;
  }

  redirectToChatRoom = () => {
    const {navigation} = this.props;
    const {fname, lname} = this.state;
    this.setState({visibleModal: false});
    this.sharedService.setItem('chatUser', {id: Constants.deviceId, fname, lname});
    navigation.navigate('ChatRoom');
  }

  render() {
    const {visibleModal, fname, lname} = this.state;
    return (
      <View>
        <Button 
          title="Chat Room"
          color="#2f4f4f"
          onPress={() => this.setState({visibleModal: true})} 
        />
        <Modal visible={visibleModal} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.heading}>Fill up your details</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  placeholder='First Name...'
                  style={styles.inputTextBox}
                  value={fname}
                  onChangeText={(txt) => this.setState({fname: txt})}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                  placeholder='Last Name...'
                  style={styles.inputTextBox}
                  value={lname}
                  onChangeText={(txt) => this.setState({lname: txt})}
                />
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.enterBtn}>
                  <Button 
                    title="Enter Chat Room" 
                    color="#6b8e23" 
                    disabled={this.btnDisabled} 
                    onPress={this.redirectToChatRoom.bind(this)}
                  />
                </View>
                <Button title="Cancel" color="#ff6347" onPress={() => this.setState({visibleModal: false})} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: '#f0f8ff',    
    width: 350,
    height: 350,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  heading: {
    fontSize: 20,
    color: '#800000',
    marginBottom: 10,
    marginTop: 10
  },
  inputContainer: {
    flexDirection: 'column',
    width: '80%'
  },
  inputTextBox: {
    borderColor: '#d3d3d3',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 12,
    marginTop: 5,
    padding: 8,
  },
  inputLabel: {
    fontSize: 15,
    color: '#778899'
  },
  enterBtn: {
    marginBottom: 10
  }
});

export default EnterChatRoom;
