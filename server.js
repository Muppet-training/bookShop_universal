const express = require('express');
const app = express();
const path = require('path');

// MIddleware to define folder for static files
app.use(express.static('public'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, function() {
    console.log('App is listening to port 3000...');
});
