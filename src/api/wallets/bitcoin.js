// import Bitcoin from 'bitcoin';
const axios = require('axios');

const getBalance = async address => {
  const response = await axios.get(`https://blockexplorer.com/api/addr/${process.env.BTC_ADD}/balance`)
  return response.data;
}

getBalance(process.env.BTC_ADD).then(console.dir).catch(console.dir)


