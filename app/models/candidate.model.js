module.exports = (sequelize, Sequelize) => {
    const candidate = sequelize.define("candidate", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.STRING
      }
    });
    return candidate;
};