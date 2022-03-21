const vetCtrl = require("../controllers/vet.controller");

module.exports = (app) => {
    app.post("/api/vet", vetCtrl.addNewVet);
    app.get("/api/vet", vetCtrl.getAllVets);
    app.get("/api/vet/:id", vetCtrl.getVetById);
    app.delete("/api/vet/:id", vetCtrl.deleteVet);
    app.put("/api/vet/:id", vetCtrl.updateVet);
}