// useBookDetails.js (Custom Hook)
import { useState } from 'react';

export function useBookDetails() {
  const [book, setBook] = useState({
    title: 'Example Book',
    author: 'John Doe',
    rating: 0,
  });

  const updateRating = (newRating: number) => {
    setBook({
      ...book,
      rating: newRating,
    });
  };

  return { book, updateRating };
}
