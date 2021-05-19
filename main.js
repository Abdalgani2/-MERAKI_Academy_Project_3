
const express = require("express");
const app = express();
const db = require("./db");
const { User, Articles, Comments } = require("./schema");
const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");
const port = 5000;
app.use(express.json());
// //////////////////////////////////////////////////////////////////////////////////////
// // create new user
const createNewAuthor = async (req, res) => {
    const salt =10 ;
    const { firstName, lastName, age, country } = req.body
   
    password1=req.body.password
    const email1=req.body.email
     const email=email1.toLowerCase()
     const password = await bcrypt.hash(password1, salt);
    
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

}
app.post("/users", createNewAuthor)
// //////////////////////////////////////////////////////////////////////////////////////
// // login
const login=(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const found = User.findOne({ email: email, password: password }).then((result) => {
        if (result == null) {
            res.json("Invalid login credentials");
            res.status(201);
        }
        else {
            res.json(" valid login credentials");
            res.status(401);
        }
    });
};
app.post("/login", login);
// //////////////////////////////////////////////////////////////////////////////////////
// // create new comment 
const createNewComment =(req,res) => {
    const comment  = req.body.comment
    const commenter=req.params.id;
    const newComment = new Comments(
        { comment,commenter  }
    )
    newComment.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        })
}
app.post("/articles/:id/comments",createNewComment);
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
const deleteArticleById = async (req, res) => {
    const idDelete = req.params.id;
    await Articles.deleteOne({ _id: idDelete });
    const deleteMassage = {
        "success": true,
        "massage": `Success Delete article with id => ${idDelete}`
    };
    res.json(deleteMassage)
};
app.delete("/articles/:id", deleteArticleById);
//////////////////////////////////////////////////////////////////////////////////////
// // delete articles by author
const deleteArticleByAuthor = async (req, res) => {
    const authorDelete = req.query.author;
    await Articles.deleteMany({ author: authorDelete });
    const deleteMassage = {
        "success": true,
        "massage": `Success Delete article with id => ${authorDelete}`
    };
    res.json(deleteMassage)
};
app.delete("/articles", deleteArticleByAuthor);
// //////////////////////////////////////////////////////////////////////////////////////
// //   update an article by id
app.put("/articles/:id", (req, res) => {
    const idUpdate = req.params.id;
    Articles.update({ _id: idUpdate });
})
app.listen(port, () => {
    console.log(`the server run the port ${port}`);
});
