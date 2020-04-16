import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

class ProductLists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data, onDeleteProduct} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={itemData =>
          <TouchableOpacity onPress={onDeleteProduct.bind(this, itemData.item.id)}>
            <View style={styles.listItems}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        }
      />    
    );
  }
};

const styles = StyleSheet.create({
  listItems: {
    width: 200,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#CCC'
  }
});

export default ProductLists;
