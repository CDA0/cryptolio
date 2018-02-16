import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, Text, View } from 'react-native';
import styled from 'styled-components';

// TODO: Remove this mockData after pulling data from real APIs
const mockData = [
  {
    name: 'Bitcoin',
    tickerSymbol: 'btc',
    key: 'btc',
    value: '196.23',
  },
  {
    name: 'Bitcoin Cash',
    tickerSymbol: 'bch',
    key: 'bch',
    value: '89.87',
  },
  {
    name: 'Ethereum',
    tickerSymbol: 'eth',
    key: 'eth',
    value: '274.16',
  },
  {
    name: 'Neo',
    tickerSymbol: 'neo',
    key: 'neo',
    value: '30.04',
  },
];

const getIcon = tickerSymbol => {
  return {
    btc: () => require(`../../images/icons/btc.png`),
    eth: () => require(`../../images/icons/eth.png`),
    bch: () => require(`../../images/icons/bch.png`),
    neo: () => require(`../../images/icons/neo.png`),
  }[tickerSymbol]();
};

const StyledCoinWrapper = styled(View)`
  border-top-color: #ddd;
  border-top-width: 0.5;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 3px;
  padding: 10px;
  padding-left: 15px;
  align-items: center;

  border-bottom-color: #ddd;
  border-bottom-width: 0.5;
`;

const StyledText = styled(Text)`
  color: #333;
  font-size: 38;
  font-weight: 300;
  padding-left: 10px;
`;

const CoinItem = ({ value, tickerSymbol }) => (
  <StyledCoinWrapper>
    <Image style={{ width: 36, height: 36 }} source={getIcon(tickerSymbol)} />
    <StyledText>{value}</StyledText>
  </StyledCoinWrapper>
);

CoinItem.propTypes = {
  tickerSymbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const CoinsList = ({ data = mockData }) => (
  <FlatList data={data} renderItem={({ item }) => <CoinItem {...item} />} />
);

CoinsList.propTypes = {
  data: PropTypes.array,
};

export default CoinsList;
