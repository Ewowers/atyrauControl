const Crime = require("../model/criminal");
class Control {
  async get(req, res) {
    //получение всего бд
    const crime = await Crime.find({});
    return res.status(200).json(crime);
  }
  async getId(req, res) {
    //получение по id
    const { id } = req.params;
    console.log(id);
    const crime = await Crime.findById(id);
    return res.json(crime);
  }
  async getOne(req, res) {
    //получение по категорий
    const { type, obj } = req.params;
    const foo = obj.split("_").join(" ");
    const crime = await Crime.find({ [type]: foo });
    return res.json(crime);
  }
  async add(req, res) {
    //создание нового
    try {
      const { name, code } = req.body;
      const crime = new Crime({
        name: name,
        code: code,
      });
      await crime.save();
      return res.json(crime);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  }
}
module.exports = new Control();
