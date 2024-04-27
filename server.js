require('dotenv').config()
const cleanUp = require('./cleanUp')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const bodyParser = require('body-parser')



mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())

app.use(express.urlencoded({
    extended: true,
})) 


const shortURLRouter = require('./routes/shortURLs')
app.use('/shortURLs', shortURLRouter)

app.get('/', (req, res) => {
    res.render("index")
})

/*
app.post('/save', (req, res) => {
    //const short = document.getElementById('short');
    console.log(req.body.short)
})
*/

app.listen(3000, () => console.log('Server has started'))

//cleanUp.start
