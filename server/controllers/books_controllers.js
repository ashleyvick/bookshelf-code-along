
var books = []; 
var id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const { title, author } = req.body;
        const newBook = {
            title,
            author,
            id,
        };
        id++
        books.push(newBook)
    res.status(200).send(books);
    },
    update: (req,res) => {
        const { id } = req.params
        const { title, author } = req.body;
        const index = book.findIndex((book) => book.id === +id );
        books[index] = {
            title,
            author,
            id
        }
        res.status(200).send(books);
    }
}
