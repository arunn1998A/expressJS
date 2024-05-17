
const getBook = (req, res) => {
    res.send('Code for: Get all books')
  }
  const getmyBookById = (req, res) => {
    res.send('Code for: Get book by ID')
  }
  const addmyBook = (req, res) => {
    res.send('Code for: Add a new book')
  }
  const patchmyBook = (req, res) => {
    res.send('Code for: Update book details')
  }
  const deletemyBook = (req, res) => {
    res.send('Code for: Delete a book')
  }
  
  
  
  module.exports = {
    getBook,
    getmyBookById,
    addmyBook,
    patchmyBook,
    deletemyBook
  }