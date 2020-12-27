const express = require("express");
const http = require("http");
const path = require("path");
const ws = require("ws");
const homeRouter = require("./routers/homeRouter");

const app = express();
app.set("view engine", "hbs");
app.set("view options", { layout: "layouts/layout" });
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "../../public")));
app.use("/", homeRouter);

const httpServer = http.createServer(app);
const wss = new ws.Server({ server: httpServer });

wss.on("connection", (socket) =>
{
    console.log("Client was coonected");
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => { console.log("Server started at port: " + port) });
