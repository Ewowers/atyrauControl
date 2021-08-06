const { Router } = require("express");
const control = require("../controler/crime.control");
const router = Router();
router.get("/", control.get);
router.get("/id=:id", control.getId);
router.get("/one/:type=:obj", control.getOne);
router.post("/add", control.add);
module.exports = router;
