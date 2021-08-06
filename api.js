const { Router } = require("express");
const event = require("./route/event.api"); // роут событие города
const crime = require("./route/crime.api"); // роут преступления
const users = require("./route/users.api"); // роут пользователей
const directory_organizations = require("./route/directory_organizations.api"); // роут справочные организации
const router = Router();
router.use("/event", event); // api событий города
router.use("/crime", crime); // api криминала
router.use("/users", users); // api пользователя
router.use("/directory_organizations", directory_organizations); //api справочные организации
module.exports = router;
