import React from 'react'
import"./Card.css"


export default function Card({details}) {
  return (
    <div className='card'>
      <img src={details.img?details.img:"https://www.shutterstock.com/image-vector/no-image-available-sign-260nw-1135028591.jpg"} alt="" />
      <h1>{details.title}</h1>
      <h3>{details.author}</h3>
      <h5>{details.genre}</h5>
    </div>
  )
}
