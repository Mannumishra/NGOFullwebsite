const mongoose = require("mongoose");

const AdminSignupSchema = new mongoose.Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
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
    mobile: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
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


const AdminSignup = mongoose.model("AdminSignup", AdminSignupSchema);


module.exports = AdminSignup

