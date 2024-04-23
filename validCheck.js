// TODO - load the blacklist into memory once, whenever it is updated refresh it 
//import {fs} from 'fs';
//require('fs').watchFile;
const fs = require('fs');
const shortURLBlacklist = './test.json'

fs.watchFile(shortURLBlacklist, (curr, prev) =>{
    // load the bad Larry into our memory and ensure we did it every time.

    // Read the thing on startup, and create a dictionary with all the blacklisted phrases in it.

    // When it updates, print out "added new things to the list"
    //prev = JSON.parse(prev)
    //curr = JSON.parse(curr)
    var obj;
    fs.readFile(shortURLBlacklist, "utf8", function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(data)
    });

    /*
    fs.readFile(shortURLBlacklist, 'utf-8', function (err, data) {
        if (err) throw err;
        console.log(data);

    })
*/
    //console.log(JSON.parse(prev));
    //console.log(JSON.parse(curr));

    // Everytime it's updated, check if there are any naughty words in existing entries and delete them
    
})

function validFullURL(fullURL) {
    // search through existing text, check if there's a match

    // filter all to lower case

    // strip off any front or back shit, top level domains only
    return true;

}

async function validShortURL(shortURL) {
    // Check through mongoose and see if it already exists
    const result = await shortURL.findOne({ shortURL : attributeValue})

    if (result) {
        return false;
    }

    // Search through the blacklist and see if it's in there
    return true;
}

/*
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
*/