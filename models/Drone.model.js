// Iteration #1
const mongoose = require("mongoose")

// Schema
const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

// Model
const Drone = mongoose.model("Drone", droneSchema);

// Export
module.exports = Drone