import { connect } from 'mongoose';

const express = require('express');
const cors = require('cors');
const app = express();
const Routers = require('./Routes');
const ConnectionDB = require('./ConectionBD/MongoDB');
const { appConfig, db } = require('./Config/Config');
// middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());
// ===================
// CONEXIÓN DATA BASE
// ===================
ConnectionDB(db);

// Router
app.use('/api', Routers);

// Server
app.listen(process.env.PORT || appConfig.port, () => {
  console.log('Server for the port 5000');
});
