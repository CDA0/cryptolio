import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import px2dp from '../../services/px2dp';

const TabIcon = props => <Icon size={px2dp(22)} {...props} />;

const getTabBarIcon = iconName => {
  const TabIconWithColor = ({ tintColor }) => (
    <TabIcon name={iconName} color={tintColor} />
  );

  TabIconWithColor.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return TabIconWithColor;
};

export { getTabBarIcon };
export default TabIcon;
