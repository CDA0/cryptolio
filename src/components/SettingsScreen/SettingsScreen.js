import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import StyledText from '../StyledText/StyledText';
import { setSelectedTab } from '../../state/entities/tabs/actions';

class SettingsScreen extends Component {
  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.props.setSelectedTab('Settings');
    });
  }

  render() {
    return (
      <ScreenWrapper>
        <StyledText>Settings</StyledText>
      </ScreenWrapper>
    );
  }
}

const mapDispatchToProps = {
  setSelectedTab,
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func.isRequired,
  }).isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export { SettingsScreen };
export default connect(null, mapDispatchToProps)(SettingsScreen);
