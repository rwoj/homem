import express from "express"
import bodyParser from "body-parser"
import http from 'http'
import socketIO from 'socket.io'

import routes from "./routes"

const app = express();
const server = http.Server(app)
const io=socketIO(server)

app.use(bodyParser.json());
routes(app, io);

const port = process.env.PORT || 8081
server.listen(port, () => console.log(`Running on localhost: ${port}`));
