const express = require('express');
const userRouter = express.Router();
const { createUser, authenticate, logout } = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware")


userRouter.post("/register", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);

module.exports =  userRouter; 