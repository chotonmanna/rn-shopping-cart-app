import React, {Component} from 'react';
import { View, TouchableOpacity, AsyncStorage, StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';
import { showMessage } from "react-native-flash-message";
import { Ionicons } from '@expo/vector-icons';

class EditItemAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qnty: props.item.qnty
    };
  }

  updateItemQnty = async () => {
    try {
      let cartItems = await AsyncStorage.getItem('cartItems');
      if (cartItems) {
        cartItems = JSON.parse(cartItems);
        const index = cartItems.findIndex(item => item.cartId === this.props.item.cartId);
        cartItems[index].qnty = this.state.qnty;
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
        showMessage({
          message: "Card",
          description: "Qnty is updated successfully.",
          type: "success",
          icon: "success",
          position: "bottom"
        });
      }
    } catch(err) {
      console.log(err);
    } 
  }

  render() {
    let {qnty} = this.state;
    const {item} = this.props;
    return (
      <View style={styles.editCartContainer}>
        <Text style={styles.editItemPrice}>Rs. {(item.price * qnty)}</Text>
        <View style={styles.qntyIcons}>
          <TouchableOpacity onPress={() => this.setState({qnty: (qnty - 1)})}>
            <Ionicons name="ios-remove-circle" size={28} color="#008080" />
          </TouchableOpacity>
          <Text style={styles.editQnty}>{qnty}</Text>
          <TouchableOpacity onPress={() => this.setState({qnty: (qnty + 1)})}>
            <Ionicons name="ios-add-circle" size={28} color="#008080" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.updateItemQnty.bind(this)}>
          <Text style={styles.updateBtn}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  editCartContainer: { 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    marginTop: 5, 
    width: 80 
  },
  editItemPrice: { 
    fontSize: 12,
    color: '#d2b48c',
    fontWeight: 'bold'
  },
  editQnty: { 
    fontSize: 20,
    color: '#008080' 
  },
  qntyIcons: { 
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  updateBtn: {
    fontSize: 13,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ff6666',
    textAlign: 'center',
    color: 'white',
    marginTop: 5
  }
});

export default EditItemAction;
