import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false
    };
  }

  render() {
    const {visibleModal} = this.state;
    const {item} = this.props;
    return (
      <View>
        <Button 
          title="Details"
          color="#bdb76b"
          onPress={() => this.setState({visibleModal: true})} 
        />
        <Modal
          visible={visibleModal}
          animationType="slide"
          transparent={true}>
            <View style={styles.modalView}>
              <Ionicons 
                name="ios-close-circle" 
                size={30} 
                onPress={() => this.setState({visibleModal: false})}
              />
              <Text>{item.name}</Text>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#f0f8ff',
    margin: 15,
    width: 365,
    height: 740,
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
    elevation: 5
  }
});

export default ProductDetails;
