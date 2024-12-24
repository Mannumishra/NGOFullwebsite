const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SignupSchema = new mongoose.Schema({
    logId: { type: String, default: "SBVKS001" },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    title: { type: String, required: false },
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    fathersName: { type: String, required: false },
    motherName: { type: String, required: false },
    gender: { type: String, required: false },
    dateOfBirth: { type: Date, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: false },
    pincode: { type: String, required: true },
    landmark: { type: String, required: false },
    country: { type: String, required: true },
    role: { type: String, default: "USER" },
    nomineeName: { type: String, required: false },
    nomineeRelation: { type: String, required: false },
    nomineeAddress: { type: String, required: false },
    nomineeNumber: { type: String, required: false },
    panNumber: { type: String, required: false },
    ifscCode: { type: String, required: false },
    accountNumber: { type: String, required: false },
    gstNumber: { type: String, required: false },
}, { timestamps: true });

const SignUp = mongoose.model("Signup", SignupSchema);


module.exports = SignUp

