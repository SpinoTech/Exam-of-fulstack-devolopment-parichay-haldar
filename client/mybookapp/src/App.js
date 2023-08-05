import"./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchedBook , setSearchedBook]=useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/books/${searchQuery}`
      );
      setSearchedBook(response.data);
      // console.log(response.data)
    } catch (error) {
      setSearchedBook({error:true , report:"internal server error"});
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className='container'>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
      <Home books={books} searchedBook={searchedBook}/>
    </div>
  );
};

export default App;
