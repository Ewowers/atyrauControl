const Users = require("../model/users");
class Control {
  async get(req, res) {
    //получение всех пользователей
    const users = await Users.find({});
    return res.json(users);
  }
  async getId(req, res) {
    //получение по Id
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user);
  }
}
module.exports = new Control();
