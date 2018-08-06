import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import Profile from './Profile'

const Navigation = createStackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
})

export default Navigation
