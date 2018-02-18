import { View } from 'react-native';
import styled from 'styled-components';

import { LIGHT_GREY } from '../../services/colors';

const StyledListItemWrapper = styled(View)`
  align-items: stretch;
  border-bottom-color: ${LIGHT_GREY};
  border-bottom-width: 0.5;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

export default StyledListItemWrapper;
