const expressRouter = require('express');
const router = expressRouter.Router();
const { CreateUser, LoginUser } = require('./Controller');

router.route('/').post(CreateUser);
router.route('/Login').post(LoginUser);

module.exports = router;
