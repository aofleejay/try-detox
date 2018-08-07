import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Map from './Map'

class Profile extends Component {
  render() {
    return (
      <View testID="profile-container" style={styles.container}>
        <Map />
        <View style={{ flex: 1 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
