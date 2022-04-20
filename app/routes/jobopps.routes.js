module.exports = app => {
    const jobOpps = require("../controllers/jobopps.controller.js");
    var router = require("express").Router();
    // Retrieve all jobs
    router.get("/", jobOpps.findAll);
    router.post("/", jobOpps.createCandidate);
    app.use('/api/jobopps', router);
  };