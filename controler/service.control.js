const Model = require("../model/services");
class Control {
  async get(req, res) {
    //get all
    const model = await Model.find({});
    return res.json(model);
  }
  async getType(req, res) {
    //get type
    const { type } = req.params;
    const model = await Model.find({ type: type });
    return res.json(model);
  }
  async getId(req, res) {
    //get id
    const { id } = req.params;
    const model = await Model.findById(id);
    return res.json(model);
  }
  async add(req, res) {
    //add
    try {
      const model = new Model({
        ...req.body,
      });
      await model.save();
      return res.json(model);
    } catch (e) {
      return res.json({ message: "все поля должны были заполены" });
    }
  }
  async delete(req, res) {
    //delete
    const { id } = req.params;
    const deletes = await Model.findByIdAndDelete(id);
    return res.status(200).end();
  }
}

module.exports = new Control();
