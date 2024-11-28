const express = require("express");
const verifyToken = require("../Middleware/verifyToken");
const { createSignup, getAllSignups, getSignupById, updateSignupById, deleteSignupById } = require("../Controllers/AdminSignupController");
const AdminSignupRouter = express.Router();

// Routes
AdminSignupRouter.post("/admin-signup", createSignup);
AdminSignupRouter.get("/get-adminsignups", getAllSignups);
AdminSignupRouter.get("/get-adminuser-details/:id", getSignupById);
AdminSignupRouter.put("/update-admin-profile/:id", updateSignupById);
AdminSignupRouter.delete("/delete-adminsignup/:id", deleteSignupById);


module.exports = AdminSignupRouter;
