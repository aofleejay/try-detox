import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View testID="home-container">
        <Text testID="press-me">
          Press Me!!
        </Text>
      </View>
    )
  }
}

export default App