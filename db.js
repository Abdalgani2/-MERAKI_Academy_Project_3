const mongoose = require("mongoose");
const option = {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  mongoose.connect("mongodb://localhost:27017/dataArticl", option).then(
      ()=>{ console.log("DB connected");},
      (err)=>{console.log(err);}
  )