var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  // res.send('<h1>Hello, World!</h1>');
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Listening on *:3000');
});
