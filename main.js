const { json } = require("express");
const express = require("express");
const app = express();
const { uuid } = require("uuidv4");
const port = 5000;
app.use(express.json());
let articles = [
    {
        id: 1,
        title: 'How I learn coding?',
        description:
            'Lorem, Quam, mollitia.',
        author: 'Jouza',
    },
    {
        id: 2,
        title: 'Coding Best Practices',
        description:
            'Lorem, ipsum dolor sit, Quam, mollitia.',
        author: 'Besslan',
    },
    {
        id: 3,
        title: 'Debugging',
        description:
            'Lorem, Quam, mollitia.',
        author: 'Jouza',
    },
];
//////////////////////////////////////////////////////////////////////////////////////
// get all articles 
const getAllArticles = (req, res) => {
    res.status(200);
    res.json(articles);
};
//////////////////////////////////////////////////////////////////////////////////////
// get articles by id
app.get("/articles", getAllArticles);
const getArticlesByAuthor = (req, res) => {
    res.status(200);
    const arr = []
    const auth = req.query.author;
    articles.forEach((element) => {
        if (element.author === auth) {
            arr.push(element);
        };
    });
    res.json(arr)
};
//////////////////////////////////////////////////////////////////////////////////////
// get articles by author
app.get("/articles/search_1", getArticlesByAuthor)
const getArticlesById = (req, res) => {
    res.status(200);
    const idArt = req.query.id;
    const arr = []
    console.log(idArt)
    articles.forEach((element) => {
        if (JSON.stringify(element.id) === idArt) {
            arr.push(element);
        };
    });
    res.json(arr);
};
app.get("/articles/search_2", getArticlesById);
//////////////////////////////////////////////////////////////////////////////////////
// create new article
const createNewArticle = (req, res) => {
    const newArticles = {
        titale: req.body.title,
        description: req.body.description,
        author: req.body.author,
        id: uuid()
    };
    const found = articles.find((element) => {
        return element.id === newArticles.id;
    });

    if (found) {
        res.status(404);
    }
    else {
        articles.push(newArticles);
    };
    res.status(200);
    res.json(newArticles);
};
app.post("/articles", createNewArticle)
//////////////////////////////////////////////////////////////////////////////////////
//   update an article by id
app.put("/articles/:id", (req, res) => {
    res.status(200);



})
//////////////////////////////////////////////////////////////////////////////////////
// delete articles by id
const deleteArticleById = (req, res) => {
    const deleteMassage = {
        "success": true,
        "massage": "Success Delete article with id => articleId"
    }
    const idDelet = req.params.id;
    console.log(idDelet)
    const newArticles = articles.filter(element => {
        console.log(element.id)
        return JSON.stringify(element.id) !== idDelet;
    })
    res.json(deleteMassage)
    articles = [...newArticles]
};
app.delete("/articles/:id", deleteArticleById)

console.log("ddddd")
app.listen(port, () => {
    console.log(`the server run the port ${port}`);
});

