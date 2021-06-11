const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json());
const config = require("config")
const port = config.get("app.port");
const appDebug = require("debug")("app:Debug")
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require('./swagger.json');
const { binItemsRoutes } = require("./routes/bin.route");
const { formatResult } = require("./utils/import");
const { diaryRoutes } = require("./routes")
const moodRouter = require("./moodRouter");
const memoryRouter = require("./memoryRouter");
const eventRouter = require("./eventRouter");
const { GoalsRoutes } = require('./routes/goal.route');
require('./models/db')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/diary", diaryRoutes)
app.use('/binItems', binItemsRoutes)
app.use('/api/goals', GoalsRoutes)
app.use('/moods', moodRouter);
app.use('/memories', memoryRouter);
app.use('/events', eventRouter);
app.use("/", (req, res) => {
    res.send(formatResult({
        status: 200,
        message: 'welcome to our page'
    }));
});
app.listen(port, () => appDebug(`app started listen on port ..... ${port}`))