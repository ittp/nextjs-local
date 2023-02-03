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

let zabbix = axios.create({
  baseURL: url + '/api_jsonrpc.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json-rpc',
  },
});

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;

  let zr = zabbix
    .post({ url: '', data: request })
    .then((response) => response.data);

  res.status(200).json({ name: 'Hello, world!' });
};
