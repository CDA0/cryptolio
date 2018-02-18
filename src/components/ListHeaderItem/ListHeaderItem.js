import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import { DARK_GREY, LIGHTER_GREY } from '../../services/colors';

const ListHeaderWrapper = styled(View)`
  background-color: ${LIGHTER_GREY};
  padding: 12px;
`;

const ListHeaderText = styled(Text)`
  color: ${DARK_GREY};
  font-size: 14;
  font-weight: bold;
`;

const ListHeaderItem = ({ title = `` }) => (
  <ListHeaderWrapper>
    <ListHeaderText>{title.toUpperCase()}</ListHeaderText>
  </ListHeaderWrapper>
);

ListHeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListHeaderItem;
