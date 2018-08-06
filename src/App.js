import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import Profile from './Profile'

const stackNavigator = createStackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
})

export default stackNavigator
