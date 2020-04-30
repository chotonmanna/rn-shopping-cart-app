import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Registration from '../views/user/Registration';
import Login from '../views/user/Login';
import Category from '../views/shop/Category';
import Products from '../views/shop/Products';
import CartItemList from '../views/cart/CartItemList';
import ChatRoom from '../views/chat/ChatRoom';
import Header from '../components/Header';

const Stack = createStackNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={headerScreenStyles}
          >
            <Stack.Screen 
              name="Home"
              component={Home}              
            />
            <Stack.Screen 
              name="Category"
              component={Category}
              options={{
                title: 'Category'
              }}
            />
            <Stack.Screen 
              name="Products"
              component={Products}
              options={(props) => ({
                headerRight: () => <Header {...props} />
              })}
            />
            <Stack.Screen
              name="Cart"
              component={CartItemList}
              options={(props) => ({
                title: 'Your Shopping Cart',
                headerRight: () => <Header {...props} />
              })}
            />
            <Stack.Screen 
              name="Registration"
              component={Registration}
              options={{title: 'Create a new user'}}
            />
            <Stack.Screen 
              name="Login"
              component={Login}
              options={{title: 'Login to your account'}}
            />
            <Stack.Screen 
              name="ChatRoom"
              component={ChatRoom}
              options={{title: 'Chat Room', headerShown: false}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const headerScreenStyles = {
  headerStyle: {
    height: 130,
    backgroundColor: '#32cd32',   
  },
  headerTitleStyle: {
    fontSize: 20,
    color: '#ffffe0',
    margin: 0
  },
};

export default Navigator;
