import React from 'react';

function BookTable({ books }) {
  return (
    <table className='table table-striped table-hover w-50'>
      <thead>
        <tr>
          <th>Író</th>
          <th>Cím</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;