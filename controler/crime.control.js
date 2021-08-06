const Crime = require("../model/criminal");
class Control {
  async get(req, res) {
    const crime = await Crime.find({});
    return res.status(200).json(crime);
  }
  async getId(req, res) {
    const { id } = req.params;
    console.log(id);
    const crime = await Crime.findById(id);
    return res.json(crime);
  }
  async getOne(req, res) {
    const { type, obj } = req.params;
    const foo = obj.split("_").join(" ");
    const crime = await Crime.find({ [type]: foo });
    return res.json(crime);
  }
  async add(req, res) {
    try {
      const { name, code } = req.body;
      const crime = new Crime({
        name: name,
        code: code,
      });
      return res.json(crime);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  }
}
module.exports = new Control();
