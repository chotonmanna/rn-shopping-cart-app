import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <Input
            placeholder='First Name...'
            style={styles.inputTextBox} 
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <Input
            placeholder='Last Name...'
            style={styles.inputTextBox} 
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address</Text>
          <Input 
            style={[styles.inputTextBox, styles.inputTextareaBox]}
            placeholder="Address..."
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    );    
  }
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 30,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 25
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
  inputTextareaBox: {
    height: 100,
    textAlignVertical: 'top'
  }
});

export default Registration;
