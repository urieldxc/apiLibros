const express = require('express');
const router = express.Router();
const controller = require('../controller')


router.get("/", controller.landing)

//GET ALL
router.get("/book-list", controller.showAllBooks)

//GET ONE

//CREATING ONE
router.get("/new-book", controller.getNewBookForm)

router.post("/new-book", controller.createNewBook)
//UPDATE

//DELETE





module.exports = router;