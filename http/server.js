const http = require('http'), fs = require('fs');

const hostname = 'localhost';
const port = 4200;

fs.readFile('./index.html', function (err, html) {
    http.createServer((req, res) => {
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html); 
    })
    .listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
