/* Dependencies */
// Node Modules
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

// Routers

// Database
const mongoose = require('mongoose');

async function startUp() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    store: new session.MemoryStore(), // TODO: change to database
    expires: new Date(Date.now() + (86400 * 1000)),
    resave: true,
    saveUninitialized: true,
  }));
  
  // Routers
  // app.use('/route1', Route1Router)
  
  // Error Handlers
  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.send(err.message);
  });
}

const app = express();
startUp();