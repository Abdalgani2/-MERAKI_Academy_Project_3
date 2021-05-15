const express = require("express");
const app = express();
// const uuidv4 =require("uuidv4");
// uuid=uuidv4();
const port = 5000;
app.use(express.json());
const articles = [
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
const getAllArticles = (req, res) => {
    res.status(200);
    res.json(articles);
};
app.get("/articles", getAllArticles);
const getArticlesByAuthor= (req, res) => {
    const arr=[]
    const auth = req.query.author;
    articles.forEach((element) => {
        if (element.author === auth) {
            arr.push(element);
        } ;
    });
    res.json(arr);
};
app.get("/articles/search_1",getArticlesByAuthor)

console.log("ddddd")
app.listen(port, () => {
    console.log(`the server run the port ${port}`);
});

