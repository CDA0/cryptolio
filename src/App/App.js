import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

const deviceW = Dimensions.get('window').width;

const basePx = 375;

function px2dp(px) {
  return px * deviceW / basePx;
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home</Text>
      </View>
    );
  }
}

class Coins extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Coins</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings</Text>
      </View>
    );
  }
}

export default class TabDemo extends Component {
  state = {
    selectedTab: 'home',
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{ color: '#3496f0' }}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => (
            <Icon name="home" size={px2dp(22)} color="#3496f0" />
          )}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'coins'}
          title="Coins"
          selectedTitleStyle={{ color: '#3496f0' }}
          renderIcon={() => (
            <Icon name="briefcase" size={px2dp(22)} color="#666" />
          )}
          renderSelectedIcon={() => (
            <Icon name="briefcase" size={px2dp(22)} color="#3496f0" />
          )}
          onPress={() => this.setState({ selectedTab: 'coins' })}
        >
          <Coins />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          selectedTitleStyle={{ color: '#3496f0' }}
          renderIcon={() => <Icon name="cog" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => (
            <Icon name="cog" size={px2dp(22)} color="#3496f0" />
          )}
          onPress={() => this.setState({ selectedTab: 'settings' })}
        >
          <Settings />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TabDemo', () => TabDemo);
