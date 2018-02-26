const axios = require('axios');
const qs = require('qs');
const crypto = require('crypto');

const BASE_URL = 'https://poloniex.com/tradingApi';
const BALANCES_ENDPOINT = '/api/v3/account';

const signedRequest = async (command, key, secret, queryParams = {}, method = 'POST', timeout = 5000) => {
  queryParams.command = command;
  queryParams.nonce = new Date().getTime() * 1000000;

  const querystring = qs.stringify(queryParams);
  const sign = crypto.createHmac('sha512', secret).update(querystring).digest('hex');
  const { data } = await axios.post(BASE_URL, querystring, {
    headers: {
      Key: key,
      Sign: sign
    }
  });
  return data;
};

const getBalances = async (key, secret) => {
  try {
    const result = await signedRequest('returnBalances', key, secret, {});
    const balances = [];
    Object.keys(result).forEach(coin => {
      if (Number(result[coin]) > 0) {
        balances.push({ [coin]: Number(result[coin]) })
      }
    })
    return balances;
  } catch (e) {
    throw e;
  }

}

getBalances(process.env.PX_KEY, process.env.PX_SECRET).then(console.dir).catch(console.dir);
