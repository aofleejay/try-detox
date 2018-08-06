import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Profile extends Component {
  render() {
    return (
      <View testID="profile-container" style={styles.container}>
        <Text>
          Profile
        </Text>
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

export default Profile