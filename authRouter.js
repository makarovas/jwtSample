const Router = require("express");
const { getUsers } = require("./authController");
const controller = require("./authController");

const router = new Router();

// console.log(router);

router.post("/registration", controller.registration);
router.get("/login", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
