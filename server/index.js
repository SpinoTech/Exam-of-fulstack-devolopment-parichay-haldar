const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


// for checking the endpoint is orking or not
app.get("/",(req,res)=>{
    res.send("ok.successful");
})

// server.js

// Replace this array with a proper database
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3' },
    { id: 4, title: 'Book 4', author: 'Author 4', genre: 'Genre 4' },
    { id: 5, title: 'Book 5', author: 'Author 5', genre: 'Genre 5' },
    { id: 6, title: 'Book 6', author: 'Author 6', genre: 'Genre 6' },
    { id: 7, title: 'Book 7', author: 'Author 7', genre: 'Genre 7' },
    { id: 8, title: 'Book 8', author: 'Author 8', genre: 'Genre 8' },
    { id: 9, title: 'Book 9', author: 'Author 9', genre: 'Genre 9' },
    { id: 10, title: 'Book 10', author: 'Author 10', genre: 'Genre 10' }
  ];
  
  // get all books
  app.get('/api/books', (req, res) => {
    res.json(books);
  });
  
// get a single book by title
app.get('/api/books/:paramiter', (req, res) => {
  const bookparamiter = req.params.paramiter;
  const book = books.find((book) => (book.title === bookparamiter)||(book.author===bookparamiter));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});


  
  // add a new book
  app.post('/api/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
  });
  
  // update an existing book
  app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }
    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    res.json(books[bookIndex]);
  });
  
  // delete a book by ID
  app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }
    books.splice(bookIndex, 1);
    res.sendStatus(204).send("successfully deleted");
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
