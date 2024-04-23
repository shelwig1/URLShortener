const shortURL = require('./models/shortURLModel')
const hourMilliseconds = 3600000
const tenSecMilliseconds = 10000
const start = deleteOldEntries()

const cullInterval = tenSecMilliseconds
const ageCutoff = tenSecMilliseconds

async function deleteOldEntries() {
    console.log('Deleting old entries')
    try {
        //const oneHourAgo =  new Date(Date.now() - 60 * 60 * 1000)

        // This is verified
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        const tenSecondsAgo = new Date(Date.now() - (10 * 1000));

        const result = await shortURL.deleteMany( {creationDate: { $lte: ageCutoff}})

        if (result) {
            message = result.deletedCount + " entries deleted"
            console.log(message)
        }
    } catch (err) {
        console.error('Error deleting old entries: ', err);
    }
}

module.exports = start

deleteOldEntries()
setInterval(deleteOldEntries, cullInterval )