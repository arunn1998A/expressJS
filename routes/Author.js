const express = require('express')
const { getallAuthors, getmyAuthorById, addmyAuthor, patchtheAuthor, deletehteAuthor } = require('./controllers/authorControllers')
const router = express.Router()


router.get('/', getallAuthors)



router.get('/:authorId', getmyAuthorById)


router.post('/:authorId', addmyAuthor)




router.patch('/:authorId', patchtheAuthor)



router.delete('/:authorId', deletetheAuthor)



module.exports = router