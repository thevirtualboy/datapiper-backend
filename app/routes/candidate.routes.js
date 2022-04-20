module.exports = app => {
    const candidates = require("../controllers/candidate.controller.js");
    var router = require("express").Router();
    router.get("/", candidates.findAll);
    router.post("/", candidates.create);
    app.use('/api/candidates', router);
  };