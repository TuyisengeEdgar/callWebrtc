const path = require("path");
const { createServer } = require("http");

const express = require("express");
const { getIO, initIO } = require("./socket");
const userRoutes = require("./src/routes");
const app = express();

app.use("/", express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use("/api/v1/users", userRoutes);
const httpServer = createServer(app);

let port = process.env.PORT || 3500;

initIO(httpServer);

httpServer.listen(port);
console.log("Server started on ", port);

getIO();
