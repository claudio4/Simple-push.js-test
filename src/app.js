const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function() {
    console.log("You can access to the test in http://127.0.0.1:8080")
});