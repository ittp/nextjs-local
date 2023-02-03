let request = {
  jsonrpc: '2.0',
  method: 'apiinfo.version',
  id: 1,
  auth: null,
  params: {},
};

const axios = require('axios');

let url = 'http://api.vapezone.pro:28080';

let zabbix = axios.create({
  baseURL: url + '/api_jsonrpc.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json-rpc',
  },
});

zabbix.post({ url: '', data: request });
