import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import px2dp from '../../services/px2dp';
import { LIGHT_BLUE, DARK_GREY } from '../../services/colors';

const TabIcon = props => (
  <Icon
    size={px2dp(22)}
    color={props.selected ? LIGHT_BLUE : DARK_GREY}
    {...props}
  />
);

TabIcon.propTypes = {
  selected: PropTypes.bool,
};

TabIcon.defaultProps = {
  selected: false,
};

export default TabIcon;
