import express from "express"
import bodyParser from "body-parser"
import horizon from '@horizon/server'
import routes from "./routes"
import config from "./config/config"

const app = express();

app.use(bodyParser.json());
routes(app);

const port = process.env.PORT || 8082
const httpServer = app.listen(port, () => console.log(`Running on localhost: ${port}`));
const horizonServer = horizon(httpServer, config.horizon);
