const express = require("express");

const app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));


const server = app.listen(8081, function(){
    const port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
