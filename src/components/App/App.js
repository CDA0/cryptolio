import { TabNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen/HomeScreen';
import CoinsScreen from '../CoinsScreen/CoinsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import { getTabBarIcon } from '../TabIcon/TabIcon';
import { LIGHT_BLUE, DARK_GREY } from '../../services/colors';

const Cryptolio = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: getTabBarIcon('home'),
      }),
    },
    Coins: {
      screen: CoinsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: getTabBarIcon('briefcase'),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: getTabBarIcon('cog'),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: LIGHT_BLUE,
      inactiveTintColor: DARK_GREY,
    },
  }
);

export default Cryptolio;
