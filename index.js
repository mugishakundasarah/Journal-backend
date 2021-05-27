const express = require('express');
const app = express();
app.use(express.json());
const moodRouter = require("./moodRouter");
const memoryRouter = require("./memoryRouter");
const eventRouter = require("./eventRouter")
app.use('/moods',moodRouter);
app.use('/memories',memoryRouter);
app.use('/events',eventRouter);
const port = 5400;

require("./models/db");

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})
