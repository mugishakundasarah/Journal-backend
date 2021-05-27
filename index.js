const express = require('express');
const app = express();
const config = require("config")
const port = config.get("app.port");
const appDebug = require("debug")("app:Debug")

require("./models/db");

app.listen(port, () => appDebug(`app started listen on port ..... ${port}`))
