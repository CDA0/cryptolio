import { StackNavigator } from 'react-navigation';

import CoinsScreen from '../CoinsScreen/CoinsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import { getTabBarIcon } from '../TabIcon/TabIcon';
import { DARK_BLUE } from '../../services/colors';
import withStore from '../withStore/withStore';

const App = StackNavigator({
  Coins: {
    screen: CoinsScreen,
    path: 'coins',
    navigationOptions: ({ navigation }) => ({
      title: `Cryptolio`,
      headerTintColor: DARK_BLUE,
    }),
  },
  Settings: {
    screen: SettingsScreen,
    path: 'settings',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: getTabBarIcon('cog'),
    }),
  },
});

export { App };
export default withStore(App);
