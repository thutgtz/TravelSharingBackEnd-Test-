const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const routesRoute = require('./routes/routes');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    () => console.log('connected to db',process.env.DB_CONNECT));
    mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use('/api/user',authRoute)
app.use('/api/routes',routesRoute);

app.listen( 3000 , () => console.log('Server Up'));