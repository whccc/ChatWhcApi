const expressRouter = require("express");
const router = expressRouter.Router();
const { CreateUser } = require("./Controller");

router.route("/").post(CreateUser);

module.exports = router;
