require('dotenv').config();
const config={
    env:process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret:process.env.JWT_SECRET||'we are the best',
    mongoUrl:process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017'),
}
module.exports=config;