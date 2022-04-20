const db = require("../models");
const jobOpps = db.jobopps;
const Candidate = db.candidate;
const Op = db.Sequelize.Op;
exports.findAll = (req, res) => {
    jobOpps.findAll({include: ["candidates"]})
      .then(data => {
        res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving jobs."
        });
    });
};
exports.createCandidate = (req, res) => {
    Candidate.create({
      name: req.name,
      email: req.email,
      joboppId: req.joboppId,
    })
      .then((candidate) => {
        console.log(">> Created candidate.");
        res.send(candidate);
      })
      .catch((err) => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating candidate."
        });
      });
  };
exports.update = (req, res) => {
    const id = req.params.id;
    jobOpps.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Job was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Job with id=" + id
        });
    });
};