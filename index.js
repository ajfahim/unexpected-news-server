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

app.get("/news/:id", (req, res) => {
    const id = req.params.id
    const newsCategory = news.filter(n => n._id === id)
    res.send(newsCategory);
})

app.listen(port, () => {
    console.log("server started on port ", port)
})

