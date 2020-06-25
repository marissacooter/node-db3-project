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
    return db('schemes').where({id}).del()
}

// PUT
function update(changes, id) {
    return db('schemes').where({id}).update(changes)
}

// ADD STEP
function addStep(stepData, id) {
    return db('schemes').where({id}).insert(stepData)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove,
    update,
    addStep
}