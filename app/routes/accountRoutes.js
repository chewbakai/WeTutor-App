module.exports = app => {
    const tutorials = require("../controllers/accountController.js");
  
    var router = require("express").Router();
  
    router.get("/register_account", accountController.registerAccount);
    router.post("/login", accountController.loginAccount);
  };