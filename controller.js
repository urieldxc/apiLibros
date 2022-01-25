const path = require('path');
const Books = require('./model/Books')

exports.landing = (req,res)=>{
    res.send("HOLA")
}

exports.showAllBooks =  async (req,res)=>{
    try{
        const books = await Books.find();
        res.json(books)
    }catch (err){res.json({message: err.message})}
}

exports.getNewBookForm = (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "bookForm.html"))
}

exports.createNewBook = async(req,res)=>{
    const book = new Books({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        genere: req.body.genere
    })
    book.newBook();
    res.json(book)
}