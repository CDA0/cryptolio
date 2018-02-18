import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

import getIcon from '../../services/getIcon';
import cryptoColors from '../../services/cryptoColors';
import CurrencyName from '../CurrencyName/CurrencyName';
import CryptoCurrencyValue from '../CryptoCurrencyValue/CryptoCurrencyValue';
import IconImage from '../IconImage/IconImage';
import PrimaryCurrencyValue from '../PrimaryCurrencyValue/PrimaryCurrencyValue';
import StyledListItemWrapper from '../StyledListItemWrapper/StyledListItemWrapper';

const CurrencyAndIcon = styled(View)`
  justify-content: space-between;
`;

const CoinValue = styled(View)`
  justify-content: space-between;
`;

const ListItem = ({
  consistsOf,
  currencyName,
  iconName,
  primaryCurrencyValue,
}) => (
  <StyledListItemWrapper>
    <CurrencyAndIcon>
      {currencyName && <CurrencyName>{currencyName}</CurrencyName>}
      {iconName && <IconImage source={getIcon(iconName)} />}
    </CurrencyAndIcon>

    <CoinValue>
      <PrimaryCurrencyValue color={cryptoColors[iconName]}>
        {primaryCurrencyValue}
      </PrimaryCurrencyValue>

      {consistsOf.map(({ key, value }, itemIndex) => (
        <CryptoCurrencyValue key={key}>
          {itemIndex > 0 && `+ `}
          {value}
        </CryptoCurrencyValue>
      ))}
    </CoinValue>
  </StyledListItemWrapper>
);

ListItem.propTypes = {
  consistsOf: PropTypes.array,
  currencyName: PropTypes.string,
  iconName: PropTypes.string,
  primaryCurrencyValue: PropTypes.string,
  value: PropTypes.string,
};

ListItem.defaultProps = {
  consistsOf: [],
};

export default ListItem;
