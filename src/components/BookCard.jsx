import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './bookcard.css'

function BookCard() {

  const [book, setBook] = useState([])



  const fetchUserData = () => {
    fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBook(data)
      })
      .then(data => console.log(data))
  }



  useEffect(fetchUserData
    , [])




  return (
    <div className="containerdiv">
      {book.map(book => (
        <Card className='cardzz' key={book.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.cover_image} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Sample Text
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  );

}

export default BookCard;