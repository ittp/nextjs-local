// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

let request = {
  jsonrpc: '2.0',
  method: 'apiinfo.version',
  id: 1,
  auth: null,
  params: {},
};

let url = 'http://api.vapezone.pro:28080';
const { ZabbixClient } = require('zabbix-client');

// No calls are made here yet
const client = new ZabbixClient(url + '/api_jsonrpc.php');
// let zabbix = axios.create({
//   baseURL: url + '/api_jsonrpc.php',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json-rpc',
//   },
// });

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;

  // A token will be fetched and saved for further use
  const api = await client.login('Admin', 'tyui1234');

  console.log(api);

  res.status(200).json({ name: 'Hello, world!' });
};
