```javascript
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Unhandled promise rejections are silently swallowed
const promise = Promise.reject(new Error('Something went wrong'));
```