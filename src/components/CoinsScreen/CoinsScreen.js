import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StyledView from '../StyledView/StyledView';
import StyledText from '../StyledText/StyledText';
import { setSelectedTab } from '../../state/entities/tabs/actions';

class CoinsScreen extends Component {
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.setSelectedTab('Coins');
    });
  }

  render() {
    return (
      <StyledView>
        <StyledText>Coins</StyledText>
      </StyledView>
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
