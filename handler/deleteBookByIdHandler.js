const books = require('../src/books')

exports.deleteBookByIdHandler = (request, h) => {
  const { id } = request.params

  /** checking is id available or not */
  const index = books.findIndex((book) => book.id === id)

  /** if id is available, return notes has been deleted */
  if (index !== -1) {
    books.splice(index, 1)
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
    response.code(200)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  })
  response.code(404)
  return response
}
