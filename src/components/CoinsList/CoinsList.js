import React from 'react';
import PropTypes from 'prop-types';
import { SectionList } from 'react-native';

import ListHeaderItem from '../ListHeaderItem/ListHeaderItem';
import ListItem from '../ListItem/ListItem';

// TODO: Replace with API call to https://blockchain.info/ticker?cors=true
const mockCurrencyMap = {
  USD: {
    '15m': 10741.06,
    last: 10741.06,
    buy: 10741.86,
    sell: 10740.25,
    symbol: '$',
  },
  AUD: {
    '15m': 13586.36,
    last: 13586.36,
    buy: 13587.38,
    sell: 13585.34,
    symbol: '$',
  },
  BRL: {
    '15m': 34697.9,
    last: 34697.9,
    buy: 34700.5,
    sell: 34695.3,
    symbol: 'R$',
  },
  CAD: {
    '15m': 13489.21,
    last: 13489.21,
    buy: 13490.22,
    sell: 13488.2,
    symbol: '$',
  },
  CHF: {
    '15m': 9964.34,
    last: 9964.34,
    buy: 9965.08,
    sell: 9963.59,
    symbol: 'CHF',
  },
  CLP: {
    '15m': 6373742.04,
    last: 6373742.04,
    buy: 6374219.72,
    sell: 6373264.35,
    symbol: '$',
  },
  CNY: {
    '15m': 68170.25,
    last: 68170.25,
    buy: 68175.36,
    sell: 68165.14,
    symbol: '¥',
  },
  DKK: {
    '15m': 64485.0,
    last: 64485.0,
    buy: 64489.83,
    sell: 64480.16,
    symbol: 'kr',
  },
  EUR: {
    '15m': 8698.78,
    last: 8698.78,
    buy: 8703.18,
    sell: 8694.38,
    symbol: '€',
  },
  GBP: {
    '15m': 7656.87,
    last: 7656.87,
    buy: 7657.44,
    sell: 7656.29,
    symbol: '£',
  },
  HKD: {
    '15m': 84009.55,
    last: 84009.55,
    buy: 84015.85,
    sell: 84003.25,
    symbol: '$',
  },
  INR: {
    '15m': 691616.53,
    last: 691616.53,
    buy: 691668.37,
    sell: 691564.7,
    symbol: '₹',
  },
  ISK: {
    '15m': 1078831.57,
    last: 1078831.57,
    buy: 1078912.42,
    sell: 1078750.71,
    symbol: 'kr',
  },
  JPY: {
    '15m': 1135170.5,
    last: 1135170.5,
    buy: 1135589.96,
    sell: 1134751.03,
    symbol: '¥',
  },
  KRW: {
    '15m': 1.145640927e7,
    last: 1.145640927e7,
    buy: 1.145726788e7,
    sell: 1.145555065e7,
    symbol: '₩',
  },
  NZD: {
    '15m': 14536.55,
    last: 14536.55,
    buy: 14537.64,
    sell: 14535.46,
    symbol: '$',
  },
  PLN: {
    '15m': 35986.3,
    last: 35986.3,
    buy: 35988.99,
    sell: 35983.6,
    symbol: 'zł',
  },
  RUB: {
    '15m': 605901.84,
    last: 605901.84,
    buy: 605947.25,
    sell: 605856.43,
    symbol: 'RUB',
  },
  SEK: {
    '15m': 85599.77,
    last: 85599.77,
    buy: 85606.18,
    sell: 85593.35,
    symbol: 'kr',
  },
  SGD: {
    '15m': 14092.27,
    last: 14092.27,
    buy: 14093.32,
    sell: 14091.21,
    symbol: '$',
  },
  THB: {
    '15m': 336157.43,
    last: 336157.43,
    buy: 336182.62,
    sell: 336132.23,
    symbol: '฿',
  },
  TWD: {
    '15m': 312328.4,
    last: 312328.4,
    buy: 312351.81,
    sell: 312304.99,
    symbol: 'NT$',
  },
};

const convertToPrimaryCurrency = (value, currency = 'GBP') => {
  const primaryCurrencyValue =
    parseFloat(value) * mockCurrencyMap[currency]['15m'];

  return primaryCurrencyValue;
};

const coinbaseWalletData = [
  {
    currencyName: 'Bitcoin',
    currencySymbol: 'BTC',
    tickerSymbol: 'btc',
    value: 0.23152523,
  },
  {
    currencyName: 'Bitcoin Cash',
    currencySymbol: 'BCH',
    tickerSymbol: 'bch',
    value: 0.91233902,
  },
  {
    currencyName: 'Ethereum',
    currencySymbol: 'ETH',
    tickerSymbol: 'eth',
    value: 3.69889398,
  },
  {
    currencyName: 'Neo',
    currencySymbol: 'NEO',
    tickerSymbol: 'neo',
    value: 5.0493018,
  },
];

const getItemDataForWallet = ({
  currencyName,
  currencySymbol,
  tickerSymbol,
  value,
}) => ({
  currencyName,
  iconName: tickerSymbol,
  key: currencySymbol,
  primaryCurrencySymbol: '£',
  primaryCurrencyValue: convertToPrimaryCurrency(value),
  value,
  consistsOf: [{ value, currencySymbol }],
  currencySymbol,
});

const sortByPrimaryCurrencyValue = data =>
  [...data].sort(
    (item1, item2) =>
      parseFloat(item1.primaryCurrencyValue) <
      parseFloat(item2.primaryCurrencyValue)
  );

const getTotalSection = wallets => {
  const coinBalances = wallets[0].data;
  // Should merge data here, to combine all entries for a currency into one row

  const totalBalance = coinBalances.reduce(
    (acc, coinBalance) => acc + parseFloat(coinBalance.primaryCurrencyValue),
    0
  );

  const sortedCoinBalances = sortByPrimaryCurrencyValue(coinBalances);

  return {
    title: 'Total',
    data: [
      {
        key: 'total',
        primaryCurrencySymbol: '£',
        primaryCurrencyValue: totalBalance,
        consistsOf: sortedCoinBalances,
        showCryptoColors: true,
      },
    ],
  };
};

const coinbaseWalletWithPrimaryCurrency = coinbaseWalletData.map(
  getItemDataForWallet
);

const coinbaseWalletSection = {
  title: 'Coinbase: fakeaccount@hotmail.com',
  data: coinbaseWalletWithPrimaryCurrency,
};

// TODO: Remove this mockSections after pulling data from real APIs
const mockSections = [
  { ...getTotalSection([coinbaseWalletSection]) },
  { ...coinbaseWalletSection },
];

const CoinsList = ({ sections = mockSections }) => (
  <SectionList
    sections={sections}
    renderItem={({ item }) => <ListItem {...item} />}
    renderSectionHeader={({ section }) => (
      <ListHeaderItem title={section.title} />
    )}
  />
);

CoinsList.propTypes = {
  sections: PropTypes.array,
};

export default CoinsList;
