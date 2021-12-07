    const account = require("../controllers/accountController.js");
    const path = require('path');
    var router = require("express").Router();
  
    router.post("/registerStudent", account.createAccount);
    router.post("/registerTutor", account.createAccount);
    router.post("/login", account.loginAccount);

    module.exports = router;