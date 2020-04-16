import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, AsyncStorage } from 'react-native';
import prodlist from '../../assets/data/products';
import ProductDetails from './ProductDetails';
import AddItemAction from '../cart/AddItemAction';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  
  UNSAFE_componentWillMount() {
    const {route, navigation} = this.props;    
    const list = prodlist.filter(prod => {
      return prod.cateId === route.params.cateId;
    });
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View>
            <Text style={styles.cateTxtTitle}>{route.params.cateName}</Text>
            <Text style={[styles.cateTxtTitle, styles.countTxt]}>({list.length} items)</Text>
          </View>
        );
      }
    });
    this.setState({list});
  }

  renderProductList({item}) {
    return (
      <View style={styles.prodContainer}>
        <Image source={item.image} style={{width: '100%', height: 250}} />
        <Text style={[styles.contentPadding, styles.prodName]}>{item.name}</Text>
        <Text style={[styles.contentPadding, styles.prodPrice]}>Rs. {item.price}</Text>
        <View style={[styles.btnContainer, styles.contentPadding]}>
          <ProductDetails item={item} />
          <AddItemAction navigation={this.props.navigation} item={item} />
        </View>
      </View>
    );
  }

  render() {
    const {list} = this.state;
    return (
      <View style={styles.screen}>
        <FlatList
          data={list}
          renderItem={this.renderProductList.bind(this)}
          numColumns={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 2
  },
  contentPadding: {
    padding: 10
  },
  prodContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  prodName: {
    fontSize: 17,
    color: '#ffa07a'
  },
  prodPrice: {
    fontSize: 16,
    color: '#fa8072',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cateTxtTitle: {
    fontSize: 22,
    color: '#ffffe0',
    margin: 0
  },
  countTxt: {
    fontSize: 15
  }
});

export default Products;
