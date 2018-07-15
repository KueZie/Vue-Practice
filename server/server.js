const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Resolve port on process or return default

const port = process.env.port || 8080;


// Server/App Config.
//Add middleware for POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

  extended: true
}));

app.use(express.static('public'));

app.get('/', (req, resp) => {
    resp.sendFile('app-home.html', { root: path.join(__dirname, '..', 'public', 'home-page') });
});

app.listen(port, () => console.log(`Now listening on port ${port}.`));