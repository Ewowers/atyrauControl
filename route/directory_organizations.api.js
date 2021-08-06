const { Router } = require("express");
const control = require("../controler/directory_organizations.control");
const router = Router();
router.get("/", control.get); //получение всего бд
router.get("/id=:id", control.getId); // получение по id
router.get("/title_kaz=:title", control.title_kz); // получение по казахскому title
router.get("/title_rus=:title", control.title_rus); // получение по русскому title
router.post("/add", control.add); // создание нового;
module.exports = router;
