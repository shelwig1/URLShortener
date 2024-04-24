const shortURLBlacklist = 'test.json'
const fs = require('fs');

//console.log(JSON.parse(file));

fs.readFile(shortURLBlacklist, "utf8", function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(data)
});
