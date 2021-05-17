
const express = require("express");
const app = express();
const db = require("./db");
const { User, Articles } = require("./schema");
const { uuid } = require("uuidv4");
const port = 5000;
app.use(express.json());
app.post("/users", (req, res) => {
    const { firstName, lastName, age, country, email, password } = req.body
    const user = new User(
        { firstName, lastName, age, country, email, password }
    )
    user.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });

})
// //////////////////////////////////////////////////////////////////////////////////////
// // create new article
const createNewArticle = async (req, res) => {
    let user;
    await User.findOne({ firstName: "ahmad" })
        .then((result) => {
            user = result;
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        });
    const { title, description } = req.body
    const newArticle = new Articles(
        { title, description, author: user._id }
    )
    newArticle.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
};
app.post("/articles", createNewArticle);
// //////////////////////////////////////////////////////////////////////////////////////
// // get all articles 
const getAllArticles = (req, res) => {
    Articles.find().then(result => {
        res.json(result);
    })
    res.status(200);
};
app.get("/articles", getAllArticles);
// //////////////////////////////////////////////////////////////////////////////////////
// // get articles by author
const getArticlesByAuthor = (req, res) => {
    res.status(200);
    const auth = req.query.author;
    Articles.find({ author: auth }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err)
    });
};
app.get("/articles/search_1", getArticlesByAuthor);
// //////////////////////////////////////////////////////////////////////////////////////
// // get articles by id
const getArticlesById = (req, res) => {
    const idArticle = req.query.id;
    Articles.find({ _id: idArticle }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err)
    });
    res.status(200);
};
app.get("/articles/search_2", getArticlesById);
//////////////////////////////////////////////////////////////////////////////////////
// // delete articles by id
const deleteArticleById = (req, res) => {
    const idDelete = req.params.id;
    const articleDelete =Articles.find({ _id: idDelete });
    const deleteMassage = {
        "success": true,
        "massage": `Success Delete article with id => ${idDelete}`
    };
    articleDelete.remove();
   res.json(deleteMassage)
};
app.delete("/articles/:id", deleteArticleById);
//////////////////////////////////////////////////////////////////////////////////////
// // delete articles by author
const deleteArticleByAuthor = (req, res) => {
    const authorDelete = req.params.id;
    const articleDelete =Articles.find({ author: authotDelete });
    const deleteMassage = {
        "success": true,
        "massage": `Success Delete article with id => ${idDelete}`
    };
    articleDelete.remove();
   res.json(deleteMassage)
};
app.delete("/articles/:id", deleteArticleByAuthor);
// //////////////////////////////////////////////////////////////////////////////////////
// //   update an article by id
app.put("/articles/:id", (req, res) => {
      const idUpdate=req.params.id;
      const articleDelete =Articles.find({ _id: idUpdate });
    articleDelete= {description,title}=req.body
        
    })

app.listen(port, () => {
    console.log(`the server run the port ${port}`);
});
