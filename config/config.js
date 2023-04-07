require('dotenv/config');

module.exports = {
    PORT : process.argv[3] || process.env.PORT || 8080,
    PERSISTENSE_MODE: process.env.MODE || 'Mongo',
    MONGO_URL: process.env.MONGODB_URI
}