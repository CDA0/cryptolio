/* globals alert */

import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderButtons from 'react-navigation-header-buttons';

import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import CoinsList from '../CoinsList/CoinsList';
import { setSelectedTab } from '../../state/entities/tabs/actions';

const IconImage = styled(Image)`
  height: 25;
  width: 25;
  margin-left: 10px;
  margin-right: 10px;
`;

class CoinsScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <HeaderButtons>
        <HeaderButtons.Item
          title="settings"
          IconElement={
            <IconImage
              source={require('../../images/header-icons/icons8-settings-100.png')}
            />
          }
          onPress={() => alert('settings')}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons>
        <HeaderButtons.Item
          title="plus"
          IconElement={
            <IconImage
              source={require('../../images/header-icons/icons8-plus-100.png')}
            />
          }
          onPress={() => alert('plus')}
        />
      </HeaderButtons>
    ),
  };

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.setSelectedTab('Coins');
    });
  }

  render() {
    return (
      <ScreenWrapper>
        <CoinsList />
      </ScreenWrapper>
    );
  }
}

const mapDispatchToProps = {
  setSelectedTab,
};

CoinsScreen.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
  }).isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export { CoinsScreen };
export default connect(null, mapDispatchToProps)(CoinsScreen);
