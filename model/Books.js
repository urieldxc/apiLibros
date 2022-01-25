const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    pages:{
        type: Number
    },
    genere:{
        type: String
    }
})

//TEST

booksSchema.methods.newBook = async function newBook(){
    try{
        await this.save();
    } catch(err){console.log(err)}
}

module.exports = mongoose.model('Books', booksSchema)