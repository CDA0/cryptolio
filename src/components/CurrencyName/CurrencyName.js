import { Text } from 'react-native';
import styled from 'styled-components';

import { GREY } from '../../services/colors';

const CurrencyName = styled(Text)`
  color: ${props => props.color || GREY};
  font-size: 14;
  font-weight: bold;
`;

export default CurrencyName;
