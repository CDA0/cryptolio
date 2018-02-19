import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

import formatNumber from '../../services/formatNumber';
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
  currencySymbol,
  currencyName,
  iconName,
  primaryCurrencySymbol,
  primaryCurrencyValue,
  showCryptoColors,
}) => (
  <StyledListItemWrapper>
    <CurrencyAndIcon>
      {currencyName && <CurrencyName>{currencyName}</CurrencyName>}
      {iconName && <IconImage source={getIcon(iconName)} />}
    </CurrencyAndIcon>

    <CoinValue>
      <PrimaryCurrencyValue
        color={currencySymbol && cryptoColors[currencySymbol.toLowerCase()]}
      >
        {`${primaryCurrencySymbol}${formatNumber(primaryCurrencyValue)}`}
      </PrimaryCurrencyValue>

      {consistsOf.map(({ value, currencySymbol }, itemIndex) => (
        <CryptoCurrencyValue
          key={currencySymbol}
          color={showCryptoColors && cryptoColors[currencySymbol.toLowerCase()]}
        >
          {itemIndex > 0 && `+ `}
          {`${formatNumber(value, undefined, 8)} ${currencySymbol}`}
        </CryptoCurrencyValue>
      ))}
    </CoinValue>
  </StyledListItemWrapper>
);

ListItem.propTypes = {
  consistsOf: PropTypes.array,
  currencyName: PropTypes.string,
  currencySymbol: PropTypes.string,
  iconName: PropTypes.string,
  primaryCurrencySymbol: PropTypes.string,
  primaryCurrencyValue: PropTypes.number,
  showCryptoColors: PropTypes.bool,
  value: PropTypes.number,
};

ListItem.defaultProps = {
  consistsOf: [],
  showCryptoColors: false,
};

export default ListItem;
