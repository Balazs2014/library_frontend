import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookTable from './BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <h1 className='text-center text-danger mt-5'>Hiba: {error.message}</h1>
    );
  }

  return (
      <div className='container py-5'>
        <h1 className='mb-5 text-center'>Könyvtár könyvei</h1>
        <div className='row justify-content-center'>
          <BookTable books={books} />
        </div>
      </div>
  );
}

export default App;