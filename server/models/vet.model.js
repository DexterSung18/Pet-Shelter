const mongoose = require("mongoose");

const VetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    // pets: [
    //     {
    //     type: String
    //     }
    // ],
    license: {
        type: String,
        required: [true, "License Number is required"],
    },
    areacode: {
        type: Number,
        required: [true, "Area Code is required"],
    },
    three: {
        type: Number,
        required: [true, "Phone Number is required"],
    },
    four: {
        type: Number,
        required: [true, "Phone Number is required"],
    },
    street: {
        type: String,
        required: [true, "Address is required"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    state: {
        type: String,
    },
    zip: {
        type: Number,
        required: [true, "Zip Code is required"],
    },
})

const Vet = mongoose.model('Vet', VetSchema);
module.exports = Vet;