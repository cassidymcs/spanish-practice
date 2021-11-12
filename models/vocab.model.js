const mongoose = require('mongoose')
const Schema = mongoose.Schema
var vocabSchema = new Schema ({
    id: String,
    english: String,
    spanish: String,
    chapter: String
}, {collection: 'vocab'})
module.exports = mongoose.model('Vocab', vocabSchema)