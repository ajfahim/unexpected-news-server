const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000

app.use(cors());

const categories = require("./data/categories.json")
const news = require("./data/news.json")

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/categories", (req, res) => {
    res.send(categories);
})

app.get("/news", (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log("server started on port ", port)
})

