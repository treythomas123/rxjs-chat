const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const messages = [];

wss.on('connection', ws => {
  console.log('new connection');
  ws.send(JSON.stringify(messages));

  ws.on('message', data => {
    const message = JSON.parse(data);

    console.log('new message:', message);
    messages.push(message);

    wss.clients.forEach( client => {
      client.send(JSON.stringify(messages));
    });
  });
});
