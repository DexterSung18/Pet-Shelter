const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minlength: [3, "Type must be at least 3 characters"],
    },
    breed: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, "Description must be at least 3 characters"],
    },
    age: {
        type: String,
        required: [true, "Age is required"],
    },
    weight: {
        type: Number,
        required: [true, "Weight is required"],
    },
    vetname: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vet'
    },
})

PetSchema.pre('find', function() {
    this.populate('vetname');
});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet; 