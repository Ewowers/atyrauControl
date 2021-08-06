const { Router } = require("express");
const control = require("../controler/users.control");
const router = Router();
router.get("/", control.get);
module.exports = router;
