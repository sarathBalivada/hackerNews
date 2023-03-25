import React from 'react';
import Card from 'react-bootstrap/Card';


const NewsCard = ( {newsData} ) => {
  return (
      <Card 
      className='newsCard'
      style={{ width: '60rem' }}>
      <Card.Title style={{ fontSize: '25px' }}>{newsData.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">By {newsData.by}</Card.Subtitle>
      <Card.Text>
          <span> {new Date(newsData.time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}</span>  <br/>
          <span> Type :{newsData.type}</span>
        </Card.Text>
        <Card.Link href={newsData.url} target="_blank">view more</Card.Link>
         </Card>
  )
}

export default NewsCard;
