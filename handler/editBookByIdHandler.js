const books = require('../src/books')

/** thi is editNoteById Handler function */
exports.editBookByIdHandler = (request, h) => {
  const { id } = request.params

  /** request payload and update edit date */
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

  /** Adding updatedAt */
  const updatedAt = new Date().toISOString()

  /** Adding finished and reading also the logic */
  let finished = false
  if(readPage === pageCount) {
      finished = true
  }

  /** get index array by id */
  const index = books.findIndex((book) => book.id === id)

  /** Handled availabillity of book.name */
  if (name == undefined) {
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400)
      return response
  }

  /** Handled logic of reading */
  if (readPage > pageCount) {
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)
      return response
  }

  /** Handled availability of index shown */
  if (index !== -1) {
    books[index] = {
      ...books[index],
    name, 
    year, 
    author, 
    summary, 
    publisher, 
    pageCount, 
    readPage,
    reading,
    finished,
    updatedAt 
    }
    /** response if id is available */
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
    response.code(200)
    return response
  }
  /** response if id isn't available */
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  })
  response.code(404)
  return response
}