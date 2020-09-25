const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
	res.end('Node.js Basics');
});
		
server.listen(3001, () => console.log('Server works'));

