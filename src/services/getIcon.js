const getIcon = tickerSymbol => {
  const iconLazyMap = {
    btc: () => require(`../images/icons/btc.png`),
    eth: () => require(`../images/icons/eth.png`),
    bch: () => require(`../images/icons/bch.png`),
    neo: () => require(`../images/icons/neo.png`),
  };

  return iconLazyMap[tickerSymbol]();
};

export default getIcon;
