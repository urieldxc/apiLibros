const res = require('express/lib/response');
const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    title:String,
    author: String,
    pages:Number,
    genere: String
})

//TEST

booksSchema.methods.newBook = async function newBook(){
    try{
        await this.save();
    } catch(err){console.log(err)}
}

module.exports = mongoose.model('Books', booksSchema)