const Event = require("../model/events");
class Control {
  async get(req, res) {
    //получение всего бд
    const event = await Event.find({});
    return res.status(200).json(event);
  }
  async getOne(req, res) {
    //получение по id
    const { id } = req.params;
    const event = Event.findById(id);
    return res.json(event);
  }
  async getDate(req, res) {
    //получение по дате
    const { date } = req.params;
    const event = await Event.find({ edate: date });
    return res.json(event);
  }
  async add(req, res) {
    //создание
    try {
      const { title_kz, comment_kz, geom, edate, comment_rus, title_rus } = req.body;
      const event = new Event({
        title_kz: title_kz,
        title_rus: title_rus,
        comment_kz: comment_kz,
        comment_rus: comment_rus,
        edate: edate,
        geom: geom,
      });
      await event.save();
      return res.json(event);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  }
}
module.exports = new Control();
