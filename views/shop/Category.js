import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import catelist from '../../assets/data/category';
import prodlist from '../../assets/data/products';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'grid',
      filterText: '',
      list: catelist,
      filterList: catelist
    };
  }

  renderCategoryItemGrid = ({item}) => {
    return (
      <TouchableHighlight onPress={this.viewProducts.bind(this, item)}>
        <View style={styles.cateGridView}>
          <Image source={item.icon} style={{width: 57, height: 57}} />
          <Text style={styles.cateTxt}>({this.getProdCount(item.id)})</Text>
          <Text style={styles.cateTxt}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderCategoryItemList = ({item}) => {
    return (
      <TouchableHighlight onPress={this.viewProducts.bind(this, item)}>
        <View style={styles.cateListView}>
          <Image source={item.icon} style={{width: 57, height: 57}} />
          <Text style={[styles.cateTxt, styles.cateListTxt]}>{item.name}</Text>
          <Text style={[styles.cateTxt, styles.cateListTxt, styles.rightTxt]}>({this.getProdCount(item.id)})</Text>
        </View>
      </TouchableHighlight>
    );
  }

  changeTextHandler = (filterText) => {
    let {list, filterList} = this.state;

    if (filterText) {
      filterList = list.filter(item => {
        return item.name.indexOf(filterText) > -1;
      });
    } else {
      filterList = list;
    }
    this.setState({filterText, filterList});
  }

  getProdCount = (cateId) => {
    const getProd = prodlist.filter(prod => {
      return prod.cateId === cateId;
    });

    return getProd.length;
  }

  viewProducts = (item) => {
    this.props.navigation.navigate('Products', {cateId: item.id, cateName: item.name});
  }

  render() {
    const {view, filterText, filterList} = this.state;
    return (
      <View style={styles.screen}>
        <TextInput
          value={filterText}
          style={styles.filterBox}
          placeholder="Search your category...."
          onChangeText={this.changeTextHandler.bind(this)}
        />
        <View style={styles.cateBar}>         
          <Text>Total Items: {filterList.length}</Text>
          <View style={styles.cateViewIcons}>
            <Ionicons 
              name="md-grid" 
              size={28} 
              onPress={() => this.setState({view: 'grid'})} 
              color={view === 'grid' ? '#ffa07a' : '#000'}
            />
            <Ionicons 
              name="ios-list" 
              size={28} 
              onPress={() => this.setState({view: 'list'})} 
              color={view === 'list' ? '#ffa07a' : '#000'} 
            />
          </View>
        </View>
        <FlatList
          key={view === 'grid' ? 'Grid View' : 'List View'}
          data={filterList}
          renderItem={view === 'grid' ? this.renderCategoryItemGrid.bind(this) : this.renderCategoryItemList.bind(this)}
          numColumns={view === 'grid' ? 2 : 1}
        />
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  screen: {
    margin: 30
  },
  cateGridView: {    
    width: 160,
    height: 110,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#fffaf0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cateTxt: {
    color: '#696969',
    fontSize: 13
  },
  filterBox: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4
  },  
  cateBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  cateViewIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 55
  },
  cateListView: {
    backgroundColor: '#fffaf0',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',      
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cateListTxt: {
    paddingLeft: 10,
    textAlignVertical: 'center'
  },
  rightTxt: {
    //marginLeft: 100
  }
});

export default Category;
