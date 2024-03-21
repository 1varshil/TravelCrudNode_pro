const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/add", userController.addUser);

router.get("/data", userController.getAllUsers);

router.get("/data/:id", userController.getUserById);

router.put("/data/:id", userController.updateUser);

router.delete("/data/:id", userController.deleteUser);

module.exports = router;
