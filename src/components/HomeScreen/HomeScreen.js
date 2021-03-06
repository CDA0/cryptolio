import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import StyledText from '../StyledText/StyledText';
import { setSelectedTab } from '../../state/entities/tabs/actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.setSelectedTab('Home');
    });
  }

  render() {
    return (
      <ScreenWrapper>
        <StyledText>Home</StyledText>
      </ScreenWrapper>
    );
  }
}

const mapDispatchToProps = {
  setSelectedTab,
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
  }).isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export { HomeScreen };
export default connect(null, mapDispatchToProps)(HomeScreen);
