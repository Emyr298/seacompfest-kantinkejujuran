/* Dependencies */
// Node Modules
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

// Routers
const registerRouter = require('./routes/register');
const sessionRouter = require('./routes/session');
const productRouter = require('./routes/product');
const balanceRouter = require('./routes/balance');

// Database
const mongoose = require('mongoose');

async function startUp() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  app.use(cors({
    origin: 'http://localhost:3000', //temporary
    methods: ['POST', 'PUT', 'GET', 'DELETE'],
    credentials: true,
  }));
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    store: new session.MemoryStore(),
    expires: new Date(Date.now() + (86400 * 1000)),
    resave: true,
    saveUninitialized: true,
  }));
  
  // Routers
  app.use('/register', registerRouter);
  app.use('/session', sessionRouter);
  app.use('/product', productRouter);
  app.use('/balance', balanceRouter);
  
  // Error Handlers
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.send(err.message);
  });
  
  app.listen(process.env.PORT);
}

const app = express();
startUp();
