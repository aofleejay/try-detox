import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

class Home extends Component {
  render() {
    return (
      <View testID="home-container" style={styles.container}>
        <TouchableHighlight testID="press-me" onPress={() => { this.props.navigation.navigate('profile') }}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
