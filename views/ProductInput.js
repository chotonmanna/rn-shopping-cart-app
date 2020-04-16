import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

class ProductInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      productText: ''
    };
  }

  textChangedHandler = (productText = '') => {
    this.setState({productText});
  };

  onAddProductHandler = () => {
    this.props.onAddProduct(this.state.productText);
    this.textChangedHandler();
  }

  render() {
    const {productText, isModalVisible} = this.state;
    const {onAddProduct} = this.props;
    return (
      <View>
        <Button title="Create new product" onPress={() => this.setState({isModalVisible: true})} />
        <Modal
        visible={isModalVisible}
        animationType="slide"
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox} 
              placeholder="Please enter your products."
              onChangeText={this.textChangedHandler.bind(this)}
              value={productText}
            />
            <Button title="Add Product" onPress={this.onAddProductHandler.bind(this)} />
          </View>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputBox: {   
    borderColor: 'green',
    borderWidth: 2,
    margin: 10,
    padding: 10
  },
});

export default ProductInput;
