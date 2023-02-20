const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getCompliment,
    createjumpStep,
    updatedjumpNumber,
    deletejumpStep,
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post("/api/jumps", createjumpStep);
app.put("/api/jumps/:id", updatedjumpNumber);
app.delete("/api/jumps/:id", deletejumpStep);


app.listen(4000, () => console.log("Server running on 4000"));
