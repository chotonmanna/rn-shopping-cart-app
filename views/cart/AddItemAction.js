import React, {Component} from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import Header from '../../components/Header';
import { showMessage } from "react-native-flash-message";

class AddItemAction extends Component {
  constructor(props) {
    super(props);
  }

  displayAddMessage = async (type, desc, cartItems) => {
    const { navigation } = this.props;
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      showMessage({
        message: "Card",
        description: desc,
        type: type,
        icon: type,
        position: "bottom"
      });
      navigation.setOptions({
        headerRight: () => <Header {...this.props} />
      });
    } catch (error) {
      console.log(error); 
    }
  };

  addItemsToCart = async () => {
    const { item } = this.props;
    const addItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      qnty: 1,
      image: item.image
    };
    try {
      let cartItems = await AsyncStorage.getItem('cartItems');
      if (cartItems === null || (JSON.parse(cartItems)).length === 0) {
        cartItems = [];
        addItem['cartId'] = 1;
        cartItems.push(addItem);
        this.displayAddMessage('success', 'Item is added successfully.', cartItems);
      } else {
        cartItems = JSON.parse(cartItems);
        const checkitemexist = cartItems.filter(checkitem => {
          return checkitem.id === addItem.id;
        });
        if (checkitemexist.length) {
          this.displayAddMessage('warning', 'Item is already added to cart.', cartItems);
        } else {
          addItem['cartId'] = (cartItems[cartItems.length - 1].cartId + 1);
          cartItems.push(addItem);
          this.displayAddMessage('success', 'Item is added successfully.', cartItems);
        }
      }
    } catch (err) {
      console.log(err);
    };
  };

  render() {
    return (
      <View>
        <Button
          title="Add to cart"
          color="#deb887"
          onPress={this.addItemsToCart.bind(this)}
        />
      </View>
    );
  }
}

export default AddItemAction;
