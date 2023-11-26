import React, { Component } from 'react'
import { Text, View } from 'react-native'


// import Index from './src/index'
import Index from './src/bottomTab'
import { NavigationContainer } from '@react-navigation/native';






export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index></Index>
      </NavigationContainer>


    )
  }
}
