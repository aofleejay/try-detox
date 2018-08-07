import React, { Component } from 'react'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import config from './config'

MapboxGL.setAccessToken(config.MAPBOX_ACCESS_KEY)

class Map extends Component {
  render() {
    return (
      <MapboxGL.MapView
        style={{ flex: 1 }}
        centerCoordinate={[100.53140938282013, 13.727081778875078]}
      />
    )
  }
}

export default Map
