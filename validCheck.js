const fs = require('fs');
const shortURL = require('./models/shortURLModel')
const shortBlackRef = './blacklists/shortURLblacklist.json'

let shortBlacklist = [];

if (shortBlacklist.length == 0) {
    console.log('empty array')
 
    fs.readFile(shortBlackRef, "utf8", function (err, data) {
        if (err) throw err;

        obj = JSON.parse(data);
        shortBlacklist = data;
        console.log(shortBlacklist);
    });
}

// Sorting the file when a new thing gets added in so we don't do it every time we do a lookup.

fs.watchFile(shortBlackRef, (curr, prev) =>{
    var obj;
    fs.readFile(shortBlackRef, "utf8", function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(data)
        shortURLpurge(data);
        shortBlacklist = data;
        shortBlacklist = data.sort();
    });

async function shortURLpurge(data) {
    try{
        for (let i = 0; i < shortBlacklist.length; i++) {
            await ShortURLs.deleteMany({shortURL : shortBlacklist[i]})
            res.json({message : "Entries deleted successfully"});
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error"});
    }
    }

})


async function shortCheck(short) {
    // Check through mongoose and see if it already exists
   /*  const result = await shortURL.findOne({ shortURL : attributeValue})

    if (result) {
        // Already exists -> how would I go about making sure that's reflected?
        return false;
    } else {
        return !shortBlacklist.includes(shortURL)
    } */


    // Need to make it a fully qualified URL to make the redirect work appropriately.
    // ie add https:// to the front if it's not already there
    return (true);
}

async function fullCheck(full) {
    return (true);

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

/*
I have shortBlacklist and longBlacklist -> we can make this the same function with branching
*/
module.exports = {
    shortCheck,
    fullCheck
}