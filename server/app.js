const express = require('express')();
const bodyParser = require('body-parser');

const app = express();

// Use body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the static build folder for front-end assets
app.use(express.static('build'));

// Register routes
require('./routes')(app);

// Boot server
app.listen(1748, () => {
  console.log('Compass listening on port :1748!');
});
