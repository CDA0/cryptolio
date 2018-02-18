import { Text } from 'react-native';
import styled from 'styled-components';

import { DARK_BLUE } from '../../services/colors';

const PrimaryCurrencyValue = styled(Text)`
  color: ${DARK_BLUE};
  font-size: 38;
  font-weight: 300;
`;

export default PrimaryCurrencyValue;
