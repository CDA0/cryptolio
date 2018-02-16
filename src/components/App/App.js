import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';

import HomeScreen from '../HomeScreen/HomeScreen';
import CoinsScreen from '../CoinsScreen/CoinsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import TabIcon from '../TabIcon/TabIcon';
import { LIGHT_BLUE } from '../../services/colors';

class Cryptolio extends Component {
  state = {
    selectedTab: 'home',
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{ color: LIGHT_BLUE }}
          renderIcon={() => <TabIcon name="home" />}
          renderSelectedIcon={() => <TabIcon name="home" selected />}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          <HomeScreen />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedTab === 'coins'}
          title="Coins"
          selectedTitleStyle={{ color: LIGHT_BLUE }}
          renderIcon={() => <TabIcon name="briefcase" />}
          renderSelectedIcon={() => <TabIcon name="briefcase" selected />}
          onPress={() => this.setState({ selectedTab: 'coins' })}
        >
          <CoinsScreen />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={selectedTab === 'settings'}
          title="Settings"
          selectedTitleStyle={{ color: LIGHT_BLUE }}
          renderIcon={() => <TabIcon name="cog" />}
          renderSelectedIcon={() => <TabIcon name="cog" selected />}
          onPress={() => this.setState({ selectedTab: 'settings' })}
        >
          <SettingsScreen />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

// const styles = StyleSheet.create({
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default Cryptolio;
