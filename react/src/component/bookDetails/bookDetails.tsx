import React from 'react';
import { useBookDetails } from './useBookDetails';

function BookDetails() {
  const { book, updateRating } = useBookDetails();

  const handleRatingChange = (event: any) => {
    updateRating(parseInt(event?.target?.value, 10));
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <label>
        Rate this book:
        <input
          type="number"
          value={book.rating}
          onChange={handleRatingChange}
        />
      </label>
    </div>
  );
}

export default BookDetails;