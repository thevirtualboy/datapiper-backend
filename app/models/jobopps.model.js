module.exports = (sequelize, Sequelize) => {
    const jobOpp = sequelize.define("jobopp", {
      client: {
        type: Sequelize.STRING
      },
      poc: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      urgency: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      skills: {
        type: Sequelize.STRING
      }
    });
    return jobOpp;
};