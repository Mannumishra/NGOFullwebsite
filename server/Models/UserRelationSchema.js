const mongoose = require('mongoose');

const UserRelationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup',unique:true, required: true }, // Reference to Signup model
  leftUser: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', default: null }, // Reference to Signup model for left user
  rightUser: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', default: null }, // Reference to Signup model for right user
}, { timestamps: true });

const UserRelation = mongoose.model('UserRelation', UserRelationSchema);

module.exports = UserRelation;
