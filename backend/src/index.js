const express = require('express');
const cors = require('cors');
const routes = require ('./routes'); // ./ para routes ser visto com arquivo e não um pacote

const app = express();

app.use(cors(
   // { origin: 'http://meuapp.com' }
));
app.use(express.json()); // define que o json de passado será convertido em objeto javascript
app.use(routes);

app.listen(3333);
