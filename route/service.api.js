const control = require("../controler/service.control");
const { Router } = require("express");
const router = Router();
router.get("/", control.get); //get all
router.get("/id=:id", control.getId); // get id
router.get("/type=:type", control.getType); //type
router.post("/add", control.add); //add
router.delete("/:id", control.delete); // delete
module.exports = router;
