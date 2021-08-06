const { Router } = require("express");
const event = require("./route/event.api");
const crime = require("./route/crime.api");
const users = require("./route/users.api");
const router = Router();
router.use("/event", event);
router.use("/crime", crime);
router.use("/users", users);
module.exports = router;
