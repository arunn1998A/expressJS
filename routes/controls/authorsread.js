const getallAuthors = (req, res) => {
    res.send(' Get all the  authors')
  }
  
  const getmyAuthorById = (req, res) => {
    res.send(' Get an  author by ID')
  }
  
  const addmyAuthor = (req, res) => {
    res.send(' Add a new author')
  }
  
  const patchtheAuthor = (req, res) => {
    res.send(' Update an author details')
  }
  
  const deletetheAuthor = (req, res) => {
    res.send(' Delete an author')
  }
  
  module.exports = {
    getallAuthors,
    getmyAuthorById,
    addmyAuthor,
    patchtheAuthor,
    deletetheAuthor
  }