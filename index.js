const express = require("express")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express()
const bodyparser = require('body-parser');
const { binItemsRoutes } = require("./routes/bin.route");
const { formatResult } = require("./utils/import");
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
require('./models/db')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/binItems',binItemsRoutes)
app.use("/", (req, res) => {
    res.send(formatResult({
        status: 200,
        message: 'welcome to our page'
    }));
});
port=5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));


