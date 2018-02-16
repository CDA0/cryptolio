import { Dimensions } from 'react-native';

const basePx = 375;

function px2dp(px) {
  const deviceW = Dimensions.get('window').width;
  return px * deviceW / basePx;
}

export default px2dp;
