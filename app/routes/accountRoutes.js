module.exports = app => {
    const tutorials = require("../controllers/account.controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/create", accountController.createAccount);
    router.get("/register", accountController.registerAccount);
    router.post("/login", accountController.loginAccount);

    app.use('/api/tutorials', router);

};