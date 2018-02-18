import { Text } from 'react-native';
import styled from 'styled-components';

import { GREY } from '../../services/colors';

const CryptoCurrencyValue = styled(Text)`
  align-self: flex-end;
  color: ${props => props.color || GREY};
  font-size: 14;
  font-weight: 300;
`;

export default CryptoCurrencyValue;
