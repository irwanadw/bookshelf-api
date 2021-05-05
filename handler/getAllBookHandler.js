const books = require('../src/books')

exports.getAllBookHandler = (request, h) => {
    const {
        name,
        reading,
        finished
    } = request.query
    
    /** Handled availabillity of book name */
    if (name !== undefined) {
        const bookByName = books.filter((book) => book.name === name)

        const findBookByName = bookByName.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }))

        if (findBookByName.length !== 0) {
            return {
                status: 'success',
                data: {
                    books: findBookByName
                }
            }
        }

        const response = h.response({
            status: 'success',
            data: {
                books: findBookByName
            }
        })

        response.code(200)
        return response    
    }

    /** Handled availabillity of reading property */
    if (reading !== undefined) {
        if (reading == 0) {
        const notReadBook = books.filter((book) => book.reading === false)
            const notRead = notReadBook.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))

            if (notRead.length !== 0) {
                return {
                    status: 'success',
                    data: {
                        books: notRead
                    }
                }
            }
            const response = h.response({
                status: 'success',
                data: {
                    books: notRead
                }
            })

        response.code(200)
        return response
    } else if (reading == 1) {
        const read = books.filter((book) => book.reading === true)

        const findReadBook = read.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }))

        if (findReadBook.length !==0) {
            return {
                status: 'success',
                data: {
                    books: findReadBook
                }
            }
        }

        const response = h.response({
            status: 'success',
            data: {
                books: findReadBook
            }
        })
        response.code(200)
        return response
        }
    }
     /** Handled availabillity of finished property */
    if (finished !== undefined) {
        if (finished == 0) {
            const notFinished = books.filter((book) => book.finished === false)

            const findNotFinishedBook = notFinished.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))

            if (findNotFinishedBook.length !== 0) {
                return {
                    status: 'success',
                    data: {
                        books: findNotFinishedBook
                    }
                }
            }

            const response = h.response({
                status: 'success',
                data: {
                    books: findNotFinishedBook
                }
            })

            response.code(200)
            return response
        } else if (finished == 1) {
            const finishedBook = books.filter((book) => book.finished === true)

            const findFinishedBook = finishedBook.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
            }))

            if (findFinishedBook.length !==0) {
                return {
                    status: 'success',
                    data: {
                        books: findFinishedBook
                    }
                }
            }

            const response = h.response({
                status: 'success',
                data: {
                    books: findFinishedBook
                }
            })

            response.code(200)
            return response
        }
    }
    const findBook = books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
    }))

    if (findBook.length !== 0) {
        return {
            status: 'success',
            data: {
                books: findBook
            }
        }
    }

    const response = h.response({
        status: 'success',
        data: {
            books: findBook
        }
    })
    console.log(findBook)
    response.code(200)
    return response
}
    
   