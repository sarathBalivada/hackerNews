import React from 'react'

const Body = ({ id, title, by, url }) => {
  return (
    <div className='App'>
      <h1>{title} </h1>
      <p>{by}</p>
      <a src={url}>click</a>
    </div>
  )
}

export default Body
