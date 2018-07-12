require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// ===ENDPOINTS===
//app.get();
//app.post();
//app.put();
//app.delete();
//===ENDPOINTS===

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port: ${process.env.SERVER_PORT}`);
})
