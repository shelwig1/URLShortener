const express = require('express')
const router = express.Router()
const shortURL = require('../models/shortURLModel')
//const shortURLModel = require('../models/shortURLModel')

//creating a new one
router.post('/', async (req,res) => {
    const aShortURL = new shortURL({
        fullURL: req.body.fullURL,
        shortURL: req.body.shortURL.toLowerCase()
    })

    try {
        const newShortURL = await aShortURL.save()
        res.status(201).json(newShortURL)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
})

// Redirect from the shortURL to the full URL
router.get('/:shortURL', async (req, res) => {
    try { 
    const attributeValue = req.params.shortURL
    const result = await shortURL.findOne({ shortURL : attributeValue})

    if (result) {
        //res.json(result.fullURL)
        res.redirect(result.fullURL)
    } else {
        res.status(404).json({message : "There is not shortURL with this name"})
    }
    } catch (err) {
        res.status(404).json({ message : err.message})
    }

})


module.exports = router