const petCtrl = require("../controllers/pet.controller");

module.exports = (app) => {
    app.post("/api/pet", petCtrl.addNewPet);
    app.get("/api/pet", petCtrl.getAllPets);
    // app.get("/api/pets/:name", petCtrl.getPetsByVet);
    app.get("/api/pet/:id", petCtrl.getPetById);
    app.delete("/api/pet/:id", petCtrl.deletePet);
    app.put("/api/pet/:id", petCtrl.updatePet);
}