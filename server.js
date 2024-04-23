require('dotenv').config()

const cleanUp = require('./cleanUp')

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const shortURLRouter = require('./routes/shortURLs')
app.use('/shortURLs', shortURLRouter)

app.listen(3000, () => console.log('Server has started'))

/*
async function deleteOldEntries() {
    try {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
        const result = await 
    }
}
*/

/*
const shortURL = require('./models/shortURLModel')
const hourMilliseconds = 3600000

async function deleteOldEntries() {
    console.log('Deleting old entries')
    try {
        //const oneHourAgo =  new Date(Date.now() - 60 * 60 * 1000)
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        //const result = await shortURL.deleteMany( {creationDate: { $lt: oneHourAgo}})
        const result = await shortURL.deleteMany( {creationDate: { $gte: tenMinutesAgo}})

        if (result) {
            message = result.deletedCount + " entries deleted"
            console.log(message)
        }
    } catch (err) {
        console.error('Error deleting old entries: ', err);
    }
}

deleteOldEntries()
setInterval(deleteOldEntries, 10000 )
*/
cleanUp.start
