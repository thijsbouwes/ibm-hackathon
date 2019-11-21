http = require('http');
var fs = require('fs');
var path = require('path');

//create a server object:
http.createServer(function (req, res) {

    var path = './dist';
    if (req.url === '/') {
        path += '/index.html';
    } else {
        path += req.url;
    }

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    const content = fs.readFileSync(path);

    res.writeHead(200, {'Content-Type': contentType});
    res.write(content); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('Server running at http://127.0.0.1:8080/');