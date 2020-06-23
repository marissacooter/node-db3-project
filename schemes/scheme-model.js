const db = require("../data/config")

// GET
function find() {
    return db("schemes")
}

module.exports = {
    find,
}