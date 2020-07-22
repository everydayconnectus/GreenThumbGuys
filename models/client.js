// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Client Schema and Model

// const ClientSchema = new Schema({
//   firstname: {
//     type: String,
//     required: [true, "Name is required"],
//     min: 2
//   },

//   lastname: {
//     type: String,
//     required: [true, "last name is required"],
//     min: 2
//   },

//   phone: {
//     type: String,
//     required: [true, "Home phone or mobile number is required"],
//     min: 6,
//     max: 255
//   },

//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     min: 6,
//     max: 255
//   },

//   street: {
//     type: String,
//     required: [true, "Street address is required"],
//     min: 10,
//     max: 255
//   },

//   city: {
//     type: String,
//     required: [true, "City is required"],
//     min: 2,
//     max: 255
//   },

//   state: {
//     type: String,
//     required: [true, "City is required"],
//     min: 2,
//     max: 15
//   },

//   bundle: {
//     type: String,
//     required: [true, "Choose Your Service Bundle"],
//     max: 255
//   },

//   pic: {
//     type: String,
//     required: [true, "upload your home image"]
//   },

//   dateAdded: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Client = mongoose.model("client", ClientSchema);

// module.exports = Client;