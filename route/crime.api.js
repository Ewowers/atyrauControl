const { Router } = require("express");
const control = require("../controler/crime.control");
const router = Router();
router.get("/", control.get); // получение всего бд
router.get("/id=:id", control.getId); //получение по id
router.get("/one/:type=:obj", control.getOne); //получение по категорий
router.post("/add", control.add); // создание нового
module.exports = router;
