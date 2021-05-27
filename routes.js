const express = require("express");
const router = express.Router();
const UserController = require("./controllers/users");

router.get("/", UserController.index);
router.post("/submit-form", UserController.submitForm);
router.get("/result", UserController.result);
router.post("/go-back", UserController.goback);

module.exports = router;