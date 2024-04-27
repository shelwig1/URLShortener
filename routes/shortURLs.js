const validCheck = require('../validCheck')
const express = require('express')
const router = express.Router()
const shortURL = require('../models/shortURLModel')

router.post('/', async (req,res) => {
    console.log(await req.body.fullURL)
    console.log(await req.body.shortURL)
    const short = await req.body.shortURL
    const full = await req.body.fullURL

    if (validCheck.shortCheck(short) && validCheck.fullCheck(full)) {
        const aShortURL = new shortURL({
            fullURL: req.body.fullURL,
            shortURL: req.body.shortURL.toLowerCase()
        })
    
        try {
            const newShortURL = await aShortURL.save()
            res.redirect('..')
            //res.status(201).json(newShortURL)


        } catch (err) {
            res.status(400).json({message : err.message})
        }
    } else {
        console.log("Invalid short or long URL")
    }    
    console.log(res);
})

// Redirect from the shortURL to the full URL
router.get('/:shortURL', async (req, res) => {
    try { 
    const attributeValue = req.params.shortURL
    const result = await shortURL.findOne({ shortURL : attributeValue})

    if (result) {
        console.log(result.fullURL)
    } else {
        res.status(404).json({message : "There is not shortURL with this name"})
    }
    } catch (err) {
        res.status(404).json({ message : err.message})
    }

})


module.exports = router