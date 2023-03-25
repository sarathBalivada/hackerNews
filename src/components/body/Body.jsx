import React  from 'react';

const renderItem = ({item, index}) => (
	<h1 key={index}>{ item }</h1>
)
const Body = ({ newsInfo }) => {
  return (
    <div className='Body'>   
      
       <h1>{title} </h1>
      <p>{by}</p>
      <a href={url}>{url}</a>
     
    </div>
  )
}

export default Body
