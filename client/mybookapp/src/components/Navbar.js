import React from 'react'
import"./Navbar.css"

export default function Navbar({searchQuery , setSearchQuery , handleSearch}) {
  return (
    <div className='navbar'>
      <div className="logo">BOOKS</div>
      <div className="search">
        <input type="text" placeholder='Search Books' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  )
}
