const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://admin:admin@ds157571.mlab.com:57571/adoteumpet', { useMongoClient: true });
