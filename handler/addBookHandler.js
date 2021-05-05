const { nanoid } = require('nanoid')
const books = require('../src/books')

/* this is addNotehandler function */
exports.addBookHandler = (request, h) => {
  const { 
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage,
    reading 
  } = request.payload

  const id = nanoid(16)
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt

/** handled if the book have read or not */
  let finished = false
  // let reading = false
  if (readPage === pageCount) {
    finished = true
  } 
  // else {
  //   reading = true
  // } 
  
  const newBook= {
    id, 
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage, 
    insertedAt, 
    updatedAt, 
    finished, 
    reading
  }

  if (!newBook.name) {
    const response = h.response({
      "status" : "fail",
      "message" : "Gagal menambahkan buku. Mohon isi nama buku"
    })
    response.code(400)
    return response 
  } 

  if (newBook.readPage > newBook.pageCount) {
    const response = h.response({
      "status" : "fail",
      "message" : "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    })
    response.code(400)
    return response
  }

   books.push(newBook)

  const isSuccess = books.filter((book) => book.id === id).length > 0
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan'
  })
  response.code(500)
  return response
}