const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); //parse JSON body
app.use(bodyParser.urlencoded()); //parse x-www-form-urlencoded body

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/foo', (req,res)=> {console.log(req); res.json(req.body)});

app.listen(3000, () => console.log('Example app listening on port 3000!'));