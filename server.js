const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
const connectDB=require('./config/db')
connectDB()
// mongoose.connect("mongodb+srv://firstnodeblog:skt3XyesvmmcjRmg@cluster0.yjrzk.mongodb.net/myNodeJsFirstDatabase?retryWrites=true&w=majority", {
//   useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true})

// mongoose.connect('mongodb://localhost/blog', {
//   useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true
// })

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)
let port=process.env.PORT || 9000;
app.listen(port)