const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(`mongodb://${config.database.host}/${config.database.name}`);

module.exports = mongoose;
