const ws = require('ws');
const url = 'ws://localhost:8080';
const connection = new ws(url);

connection.onopen = () => {
  connection.send('Message From Client');
};
connection.onerror = error => {
  console.log(`Websocket error: ${error}`);
};
connection.onmessage = e => {
  console.log(e.data);
};
