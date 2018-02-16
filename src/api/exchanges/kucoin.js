const axios = require('axios');
const qs = require('qs');
const crypto = require('crypto');

const BASE_URL = 'https://api.kucoin.com';
const BALANCES_ENDPOINT = '/v1/account/balances';

const signedRequest = async (url, queryParams = {}, headers = {}, method = 'GET', timeout = 5000) => {
  const querystring = qs.stringify(queryParams);
  const nonce = new Date().getTime();
  console.log(url, querystring)
  const { data } = await axios({
    url: `${url}?${querystring}`,
    method,
    headers
  });
  return data;
};


const createSigniture = (secret, endpoint, querystring, nonce) => {
  let signString = endpoint + "/" + nonce + "/" + querystring;
  signString = new Buffer(signString).toString('base64');
  return crypto.createHmac('sha256', secret).update(signString).digest('hex');
}

const createHeaders = async (key, secret, endpoint, queryParams) => {
  const nonce = new Date().getTime();
  return {
    'Content-Type': 'application/json',
      'KC-API-KEY': key,
      'KC-API-NONCE': nonce,
      'KC-API-SIGNATURE': await createSigniture(secret, endpoint, qs.stringify(queryParams), nonce)
  };
};

const getBalances = async (key, secret) => {
  try {
    let bals = [];
    let balances;
    let headers;
    let page = 1;
    let done = true;
    let myBalances;
    const queryParams = { limit: 20, page };
    do {
      headers = await createHeaders(key, secret, BALANCES_ENDPOINT, queryParams);
      balances = await signedRequest(BASE_URL + BALANCES_ENDPOINT, queryParams, headers);
      myBalances = balances.data.datas.filter(d => d.balance > 0);
      bals = bals.concat(myBalances);
      page++;
      if (balances.data.datas.length < 20) {
        done = true;
      }
    } while (!done);
    return bals;
  } catch (e) {
    throw e;
  }

}

getBalances(process.env.KC_KEY, process.env.KC_SECRET).then(console.dir).catch(console.dir);
