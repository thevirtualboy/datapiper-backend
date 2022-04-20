const db = require("../models");
const jobOpps = db.jobopps;
const Candidate = db.candidate;
const Op = db.Sequelize.Op;
exports.findAll = (req, res) => {
    Candidate.findAll()
      .then(data => {
        res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving candidates."
        });
    });
};
exports.create = (req, res) => {
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const candidate = {
      name: req.body.name,
      email: req.body.email,
      skills: req.body.skills,
      joboppId: req.body.joboppId
    };
    Candidate.create(candidate)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Candidate."
        });
      });
  };