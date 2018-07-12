require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');

const app = express();

app.use(bodyParser.json());

// ===ENDPOINTS===
app.get("/api/users", controller.readUser);
app.post("/api/users", controller.createUser);
//app.put();
//app.delete();
//===ENDPOINTS===

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port: ${process.env.SERVER_PORT}`);
})
