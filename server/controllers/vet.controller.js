const Vet = require("../models/vet.model");

const addNewVet = (req, res) => {
    const {body} = req;
    Vet.create(body)
    .then(newVetDoc => {
        res.json({newVetDoc});
    })
    .catch((err) => res.status(400).json(err));
}

const getVetById = (req, res) => {
    Vet.findOne({_id: req.params.id })
    .then((queriedVet) => res.json( queriedVet ))
    .catch((err) => res.status(400).json(err));
}

const getAllVets = (req, res) => {
    Vet.find()
    .then(allVets => res.json(allVets))
    .catch((err) => res.status(400).json({err}));
}

const deleteVet = (req, res) => {
    Vet.deleteOne({_id: req.params.id})
    .then(response => res.json({response}))
    .catch((err) => res.status(400).json(err));
}

const updateVet = (req, res) => {
    Vet.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
    .then((newVetDoc) => {
        res.json({ Vet: newVetDoc})
    })
    .catch((err) => res.status(400).json(err));
}

module.exports = {
    addNewVet,
    getAllVets,
    getVetById,
    deleteVet,
    updateVet,
};