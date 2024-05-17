const express = require('express')
const { getBook, getmyBookById, addmyBook, patchmyBook, deletemyBook } = require('./controllers/bookControllers')
const router = express.Router()



router.get('/', getBook)



router.get('/:bookId', getmyBookById)



router.post('/:bookId', addmyBook)



router.patch('/:bookId', patchmyBook)


router.delete('/:bookId', deletemyBook)


