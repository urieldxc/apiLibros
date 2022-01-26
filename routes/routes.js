const express = require('express');
const router = express.Router();
const controller = require('../controller')


router.get("/", controller.landing)

//GET ALL
router.get("/book-list", controller.showAllBooks)

//GET ONE
router.get("/search-book", controller.getSearchBook)
router.post("/search-book", controller.searchBook)

//CREATING ONE
router.get("/new-book", controller.getFormNewBook)
// router.post("/new-book", controller.createNewBook)

//UPDATE
router.get("/update-book", controller.getBookToUpdate)
router.post("/update-book", controller.updateBook)

//DELETE
router.get("/delete-book", controller.deleteBookFind)

router.post("/delete-book", controller.deleteBook)




module.exports = router;