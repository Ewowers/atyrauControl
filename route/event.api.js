const { Router } = require("express");
const control = require("../controler/event.control");
const router = Router();

router.get("/", control.get); // получение всего бд
router.get("/id=:id", control.getOne); // получение по id
router.get("/date=:date", control.getDate); // получение по дате
router.post("/", control.add); // создание
module.exports = router;
