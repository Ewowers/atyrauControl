const pg = require("./pg"); //База postgreSQL
const directory_organizations = require("./model/directory_organizations"); //Схема монго
const PGS = async () => {
  const table = ""; //таблица postgreSQL
  const model = await pg.query(`select * from ${table}`); //подключение к таблице postgreSQL
  model.rows.forEach(async (item) => {
    const model = new directory_organizations({
      title_rus: item.title_rus,
      title_kaz: item.title_kaz,
      address_rus: item.address_rus,
      address_kaz: item.address_kaz,
      contacts: item.contacts,
      work_time: item.work_time,
      description_rus: item.description_rus,
      description_kaz: item.description_kaz,
      region: item.region,
      type: item.type,
    });
    await model.save();
  });
};
module.exports = PGS;
