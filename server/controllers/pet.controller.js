const Pet = require("../models/pet.model");
const mongoose = require('mongoose')

const addNewPet = (req, res) => {
    const {body} = req;
    Pet.create(body)
    .then(newPetDoc => {
        res.json({newPetDoc});
    })
    .catch((err) => res.status(400).json(err));
}

const getPetById = (req, res) => {
    Pet.findOne({_id: req.params.id })
    .then((queriedPet) => res.json( queriedPet ))
    .catch((err) => res.status(400).json(err));
}

const getAllPets = (req, res) => {
    // console.log("below is what we want -------------")
    // console.log(req.params.id)
    // const pets = Pet.find().then(pets => pets.filter(pet => pet.vetname?.name === 'Test2'))
    // pets.then(console.log)
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch((err) => res.status(400).json(err));
}

// const getPetsByVet = (req, res) => {
//     console.log("below is what we want -------------")
//     console.log(req.params.name)
//     const pets = Pet.find()
//     .then(pets => pets.filter(pet => pet.vetname?.name === 'req.params.name'))
//     .catch((err) => res.status(400).json(err));
//     pets.then(console.log)
// }

const deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(response => res.json({response}))
    .catch((err) => res.status(400).json(err));
}

const updatePet = (req, res) => {
    console.log('-----------------------')
    console.log(req.body.vetname)
    Pet.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true}
        )
    .populate('vetname')
    .then((newPetDoc) => {
        console.log("Edit Pet")
        console.log(newPetDoc)
        res.json({ Pet: newPetDoc})
    })
    .catch((err) =>
    res.json({
        message: "Something went wrong. Can't UPDATE/POST/PUT",
        error: err,
    })
    );
}

module.exports = {
    addNewPet,
    getAllPets,
    // getPetsByVet,
    getPetById,
    deletePet,
    updatePet,
};