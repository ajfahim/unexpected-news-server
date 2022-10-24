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

app.get("/category/:id", (req, res) => {
    const id = req.params.id

    if (id === "08") {
        res.send(news);
    }
    else {
        const newsCategory = news.filter(n => n.category_id === id)
        res.send(newsCategory);
    }

})

app.get("/news", (req, res) => {
    res.send(news)
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id
    const singleNews = news.find(n => n._id === id)
    res.send(singleNews);
})

app.listen(port, () => {
    console.log("server started on port ", port)
})

