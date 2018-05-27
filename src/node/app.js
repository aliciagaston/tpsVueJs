const express    = require('express');
const routes = require('./route');
const app = express();
const port = 3000;

app.use('/', routes);
app.listen(port, () => console.log('node server listening on port ' + port.toString()));
