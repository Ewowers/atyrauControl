const control = require("../controler/service.control");
const { Router } = require("express");
const router = Router();
router.get("/", control.get); //get all
router.get("/id=:id", control.getId); // get id
router.get("/type=:type", control.getType); //type
// type:
// psc = цон
// сfs = азс
// tourist_agency = турестические агенства
// shop = магазин
// cafe = кафе
// restaurant = ресторан
// shopping_center = торговый центр
// cgfs = агэс
// sport_complex = спортивный комплекс
router.post("/add", control.add); //add
router.delete("/:id", control.delete); // delete
module.exports = router;
