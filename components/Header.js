import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemsCount: 0
    };
  }

  async UNSAFE_componentWillReceiveProps(props){
    try {
      let cartItems = await AsyncStorage.getItem('cartItems');
      if (cartItems) {
        cartItems = JSON.parse(cartItems);
        this.setState({cartItemsCount: cartItems.length});
      }
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const {navigation} = this.props;
    const {cartItemsCount} = this.state;
    return (
      <TouchableOpacity 
        style={styles.cartIconScreen}
        onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="md-cart" size={25} color="#ffffe0" />
        <Text style={styles.cartItemText}>{cartItemsCount} items</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cartIconScreen: {
    marginRight: 10,
    marginTop: 10
  },
  cartItemText: {
    fontSize: 12, 
    color: '#ffffe0'
  }
});

export default Header;
