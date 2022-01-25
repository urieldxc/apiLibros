const path = require('path');
const Books = require('./model/Books')
const bodyParser = require("body-parser")

exports.landing = (req,res)=>{
    res.send("HOLA")
}

exports.showAllBooks =  async (req,res)=>{
    try{
        const books = await Books.find();
        res.json(books)
    }catch (err){res.status(500).json({message: err.message})}
}

exports.getNewBookForm = (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "bookForm.html"))
}

exports.createNewBook = async(req,res)=>{
    const book = new Books({
        title: req.body.iTitle,
        author: req.body.iAuthor,
        pages: req.body.iPages,
        genere: req.body.iGenere
    })
    book.newBook();
    res.json(book)
}