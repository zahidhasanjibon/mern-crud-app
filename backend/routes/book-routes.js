const express = require("express");
const User = require("../model/users");
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/", userController().getAllUsers);
router.get("/:id", userController().getById);
router.post("/", userController().adduser);
router.put("/:id", userController().updateUser);
router.delete("/:id", userController().deleteUser);

module.exports = router;
