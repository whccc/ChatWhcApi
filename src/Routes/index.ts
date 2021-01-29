const expressRouters = require('express');
const routers = expressRouters.Router();
const Users = require('../Components/User/Routes');

routers.use('/User', Users);

module.exports = routers;
