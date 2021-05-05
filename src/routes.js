const { addBookHandler } = require("../handler/addBookHandler");
const { getAllBookHandler } = require("../handler/getAllBookHandler")
const { getBookByIdHandler } = require("../handler/getBookByIdHandler")
const { editBookByIdHandler } = require("../handler/editBookByIdHandler")
const { deleteBookByIdHandler } = require("../handler/deleteBookByIdHandler")

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
]
module.exports = routes
