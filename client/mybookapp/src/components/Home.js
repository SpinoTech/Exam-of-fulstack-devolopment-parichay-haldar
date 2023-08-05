import React from 'react'
import "./Home.css";
import Card from './Card';

export default function Home({books ,searchedBook}) {
  console.log(searchedBook)
  return (
    <div className='bookContainer'>
      {
        searchedBook&&searchedBook.error===true?<h1>No Books Of This Name Presents Here</h1>: (!searchedBook?(books&&books.map(book=><Card key={book.id} details={book}/>)) : (<Card details={searchedBook}/>))
      }
    </div>
  )
}
