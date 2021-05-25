const express = require("express")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const port = require("./config/keys").port;
const app = express()
require('./models/db')
// const {postRoutes}=require('./routes/posts.routes')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/posts', postRoutes)
app.use("/", (req, res) => {
    res.send(formatResult({
        status: 200,
        message: 'welcome to our page'
    }));
});
port=5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));


