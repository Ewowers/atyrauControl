const Users = require("../model/users");
class Control {
  async get(req, res) {
    const users = await Users.find({});
    return res.json(users);
  }
  async getId(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user);
  }
}
module.exports = new Control();
