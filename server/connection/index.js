const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/compass');

module.exports = mongoose;
