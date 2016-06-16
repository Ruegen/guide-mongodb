var mongoose = require('mongoose');

//connect to mongo db using mongoose
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected!");
});

//import schema object
var Schema = mongoose.Schema;

//make new schema and pass an object
var BlogPostSchema = new Schema({
  author: Schema.ObjectId,
  title: String,
  body: String,
  date: Date
});

// 1. create a model using mongoose and give the mongodb collection a name
// 2. pass the model schema as the second parameter
var BlogPost = mongoose.model('BlogPost', BlogPostSchema);

var mypost = {
  title: "Game of Thrones",
  body: "The most famous dwarf in all the world",
  date: new Date()
};

var post = new BlogPost(mypost);


//save to BlogPost collection database
post.save();
