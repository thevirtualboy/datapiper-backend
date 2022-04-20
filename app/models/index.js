const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.jobopps = require("./jobopps.model.js")(sequelize, Sequelize);
db.candidate = require("./candidate.model.js")(sequelize, Sequelize);
db.jobopps.hasMany(db.candidate, { as: "candidates" });
db.candidate.belongsTo(db.jobopps, {
  foreignKey: "joboppId",
  as: "jobopp",
});
module.exports = db;