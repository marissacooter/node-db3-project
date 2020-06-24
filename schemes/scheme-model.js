const db = require("../data/config")

// GET
function find() {
    return db("schemes")
}

// GET :id
function findById(id) {
    return db('schemes').where({id})
}

// GET :id steps
function findSteps(id) {
    return db('steps').where({id})
}

// POST
function add(schemeData) {
    return db('schemes').insert(schemeData)
}

// DELETE
function remove(id) {
    return db('schemes').where({id}).remove()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove
}