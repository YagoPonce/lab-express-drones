// Iteration #1
const mongoose = require("mongoose")
require("../db")
const Drone = require("../models/Drone.model")

// Data
const drones = [
    {
        name: "pokemons",
        propellers: 5,
        maxSpeed: 24
    },
    {
        name: "patata",
        propellers: 2,
        maxSpeed: 10
    },
    {
        name: "drone2000",
        propellers: 8,
        maxSpeed: 57
    },
]

// Add arrays to the database
Drone
.create(drones)
.then((response) => {
    console.log(response.length);
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err)
})