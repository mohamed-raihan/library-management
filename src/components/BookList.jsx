import { useState, useEffect } from 'react';

function BookList() {
    // State to store book data
    const [books, setBooks] = useState([]);
  
    // useEffect hook to fetch book data when the component mounts
    useEffect(() => {
      fetchBooks();
    }, []);
  
    // Function to fetch book data from the JSON Server API
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/books');
        if (!response.ok) {
          throw new Error('Failed to fetch book data');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
  
    // Render book data
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default BookList;
  