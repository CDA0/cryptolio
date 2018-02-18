import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import CoinsList from '../CoinsList/CoinsList';
import { setSelectedTab } from '../../state/entities/tabs/actions';

class CoinsScreen extends Component {
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
