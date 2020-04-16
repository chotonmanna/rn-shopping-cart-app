import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  async UNSAFE_componentWillMount() {
    await AsyncStorage.clear();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.screen}>
        <Text style={styles.welcomeText}>Welcome to our online shopping store.</Text>
        <View style={styles.btns}>
          <Button
            title="Visit Shopp"
            onPress={() => navigation.navigate('Category')}
            color="#2f4f4f"
          />
          <Button
            title="User"
            onPress={() => navigation.navigate('Registration')}
            color="#2f4f4f"
          />
        </View>
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 30
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#483d8b' 
  }
});

export default Home;
