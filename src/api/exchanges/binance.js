const axios = require('axios');
const qs = require('qs');
const crypto = require('crypto');

const BASE_URL = 'https://api.binance.com';
const BALANCES_ENDPOINT = '/api/v3/account';

const signedRequest = async (url, key, secret, queryParams = {}, method = 'GET', timeout = 5000) => {
  queryParams.recvWindow = timeout;
  queryParams.timestamp = new Date().getTime() + 1000;
  const querystring = qs.stringify(queryParams);
  const signature = crypto.createHmac('sha256', secret).update(querystring).digest('hex');
  console.log(signature)
  console.log( `${url}?${querystring}&signature=${signature}`)
  const { data } = await axios({
    url: `${url}?${querystring}&signature=${signature}`,
    method,
    timeout,
    agent: false,
    headers: {
      'X-MBX-APIKEY': key
    }
  });
  return data;
};

const getBalances = async (key, secret) => {
  try {
    console.log(process.env.BN_KEY, process.env.BN_SECRET)
    const result = await signedRequest(`${BASE_URL}${BALANCES_ENDPOINT}`, key, secret, {});
    return result;
  } catch (e) {
    throw e;
  }

}

getBalances(process.env.BN_KEY, process.env.BN_SECRET).then(console.dir).catch(console.dir);
