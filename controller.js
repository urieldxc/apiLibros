const path = require('path');
const Books = require('./model/Books');

exports.landing = (req,res)=>{
    res.sendFile("/index.html")
}

exports.showAllBooks =  async (req,res)=>{
    try{
        const books = await Books.find();
        res.json(books)
    }catch (err){res.json({message: err.message})}
}

exports.getFormNewBook = (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "bookForm.html"))
}

exports.getSearchBook = (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "searchBook.html"))
}

exports.searchBook = async (req,res) =>{
    try {
        const book = await Books.find({title: req.body.title})  
        const test = JSON.stringify(book[0])
        const test2 = JSON.parse(test)
        res.render("bookInfo.handlebars", {title: test2.title, author: test2.author, pages: test2.pages, genere: test2.genere});
        
    } catch (err) {console.log(err)}
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

exports.getBookToUpdate = async (req, res)=>{
    const book = await Books.find({title: req.body.title})
    res.render("", {data:{title: book.title, author: book.author, pages: book.pages, genere: book.genere}})  
}

exports.updateBook = async (req, res)=>{

}



exports.deleteBookFind = (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "deleteBook.html"))
}

exports.deleteBook = async (req, res) =>{
    try {
        // const bookDel = await Books.find({title: req.body.titleDel});
        await Books.deleteOne({title: req.body.titleDel})
        if(req.body.titleDel != ""){
          res.send("Libro eliminado de la colección con éxito.")  
        }  else {

            res.send("No podemos eliminar un libro sin saber el títlo!")
        }
        // Books.remove(book);
    } catch (err) {   console.log(err)  }
}