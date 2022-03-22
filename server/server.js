const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config"); 
require("./routes/pet.routes")(app);
require("./routes/vet.routes")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});