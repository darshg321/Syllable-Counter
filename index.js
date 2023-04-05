const express = require("express");
const fs = require("fs");

const PORT = 8080;
const app = express();
app.use("/assets", express.static("assets"));

app.get("/", (request, response) => {
    fs.readFile("./index.html", "utf8", (err, html) => {
        if (err) {
            response.status(500).send("not working");
        }
        response.send(html);
    });
});

app.get("/index.html", (request, response) => {
    fs.readFile("./index.html", "utf8", (err, html) => {
        if (err) {
            response.status(500).send("not working");
        }
        response.send(html);
    });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));