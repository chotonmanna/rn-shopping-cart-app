
import React, { Component } from 'react';
import Navigator from './navigators/Navigator';
import FlashMessage from "react-native-flash-message";
import { View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    // this.state = {
    //   welcomeText: 'Welcome to React Native World...',
    //   productOutput: []
    // };
  }

  // addProduct = (productText) => {
  //   console.log('getProductText', productText);
  //   const {productOutput} = this.state;
  //   productOutput.push({id: Math.random().toString(), value: productText});
  //   this.setState({productOutput});
  // };

  // deleteProduct = (productId) => {
  //   console.log(productId);
  //   let {productOutput} = this.state;
  //   productOutput = productOutput.filter(prod => {
  //     return prod.id !== productId;
  //   });
  //   this.setState({productOutput});
  // };

  render() {
    //const {welcomeText, productOutput} = this.state;
    return (
      <View style={{flex: 1}}>
        <Navigator />
        <FlashMessage position="top" />
      </View>
    );
  }
}


export default App;
