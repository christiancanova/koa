const mongoose = require('mongoose');
const {MONGO_URL} = require('../config/config.js');

const connection = mongoose.connect(`${MONGO_URL}`, {
    useNewUrlParser : true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected', () => {
    console.log('[mongoose]- connected in:', MONGO_URL)
});

mongoose.connection.on('error', (error) => {
    console.log(('[mongoose] - error:', error))
});

module.exports = connection;