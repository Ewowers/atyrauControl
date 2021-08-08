const Model = require("../model/directory_organizations");
class Control {
  async get(req, res) {
    //получение всего бд
    const model = await Model.find({});
    return res.json(model);
  }
  async getId(req, res) {
    //получение по id
    const { id } = req.params;
    const model = await Model.findById(id);
    return res.json(model);
  }
  async title_kz(req, res) {
    //получение по title_kaz
    const { title } = req.params;
    const model = await Model.findOne({ title_kaz: title.split("_").join(" ") });
    return res.json(model);
  }
  async title_rus(req, res) {
    //получение по title_rus
    const { title } = req.params;
    const model = await Model.findOne({ title_rus: title.split("_").join(" ") });
    return res.json(model);
  }
  async add(req, res) {
    //создание нового
    const model = new Model({ ...req.body });
    await model.save();
    return res.json(model);
  }
}
module.exports = new Control();
