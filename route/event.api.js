const { Router } = require("express");
const control = require("../controler/event.control");
const router = Router();

router.get("/", control.get);
router.get("/id=:id", control.getOne);
router.get("/date=:date", control.getDate);
router.post("/", control.add);
module.exports = router;
