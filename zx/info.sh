

info='{"jsonrpc":"2.0","method":"apiinfo.version","id":1,"params":{}}'
curl --request POST   \
--url 'http://5.17.8.225:28080/api_jsonrpc.php' \ --header 'Content-Type: application/json-rpc'  \
 --data ${info}