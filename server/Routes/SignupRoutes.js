const express = require("express");
const { createSignup,getchild, getAllSignups, getSignupById, updateSignupById, deleteSignupById, loginUser, getSignupByLogId } = require("../Controllers/SignupController");
const verifyToken = require("../Middleware/verifyToken");
const SignupRouter = express.Router();

// Routes
SignupRouter.post("/signup", createSignup);
SignupRouter.get("/get-signups", getAllSignups);
SignupRouter.get("/get-user-details/:id", getSignupById);
SignupRouter.get("/get-child-details/:id", getchild);
SignupRouter.get("/get-user-details-by-logId/:logid", getSignupByLogId);
SignupRouter.put("/update-profile/:id", updateSignupById);
SignupRouter.delete("/delete-signup/:id", deleteSignupById);



SignupRouter.post("/log-in", loginUser)

module.exports = SignupRouter;
