const { Router } = require("express");
const control = require("../controler/users.control");
const router = Router();
router.get("/", control.get); // получение всех юзеров
router.get("/id=:id", control.getId); //получение по id
module.exports = router;
