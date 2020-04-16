import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditItemAction from './EditItemAction';
import Header from '../../components/Header';
import { showMessage } from "react-native-flash-message";

class CartItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async UNSAFE_componentWillMount() {
    try {
      const items = await AsyncStorage.getItem('cartItems');
      if (items) {
        console.log(items);
        this.setState({items: JSON.parse(items)});
      }
    } catch(err) {
      console.log(err);
    }
  }

  deleteCartItem = (cartId) => {
    Alert.alert(
      'Cart Item Delete',
      'Are you sure to delete this item ?',
      [
        {
          text: 'Cencel',
          style: 'cancel'
        },
        {
          text: 'Proceed',
          onPress: async () => {
            const {items} = this.state;
            const index = items.findIndex(item => item.cartId === cartId);
            items.splice(index, 1);
            try {
              await AsyncStorage.setItem('cartItems', JSON.stringify(items));
              this.setState({items});
              showMessage({ message: "Card", description: "Item is deleted successfully", type: "success", icon: "success", position: "bottom"});
              this.props.navigation.setOptions({headerRight: () => <Header {...this.props} />});
            } catch (error) {
              console.log(error); 
            }
          }
        }
      ]
    );
  }

  renderCartItems = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={{width: 100, height: 100}} />
        <View style={styles.rightItemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <EditItemAction navigation={this.props.navigation} item={item} />
            <TouchableOpacity onPress={this.deleteCartItem.bind(this, item.cartId)}>
              <Ionicons name="md-trash" size={32} color="#8b0000" style={{textAlignVertical: 'bottom'}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const {items} = this.state;
    return (
      <View style={styles.screen}>
        <FlatList 
          data={items}
          renderItem={this.renderCartItems.bind(this)}
          numColumns={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 15
  },
  itemContainer: {
    marginBottom: 10,
    backgroundColor: '#fffaf0',
    paddingBottom: 5,
    flexDirection: 'row',    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  rightItemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 263,
    padding: 8
  },
  itemName: {
    color: '#708090',
    fontSize: 15
  }
});

export default CartItemList;
