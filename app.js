var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log('Your files will be served through this web server')
});
