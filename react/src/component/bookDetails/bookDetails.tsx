import React, { useState } from "react";
import { useBookDetails } from "./useBookDetails";

function BookDetails() {
  const [book, setBook] = useState({
    title: "",
    rating: 0,
  });

  const { sendBook } = useBookDetails();

  const handleChange = (event: any) => {

    setBook({
      ...book,
      [event?.target?.name]: event?.target?.value,
    });
    event?.preventDefault()

  };

  const handleSubmit = () => {
    sendBook(book);
  };

  return (
    <div>
      <h2>title: {book.title}</h2>
      <p>Rating: {book.rating}</p>
      <label>
        Rate this book:
        <input
          type="number"
          name="rating"
          role="inputRating"
          value={book.rating}
          onChange={handleChange}
        />
        Title
        <input
          data-testid="asdfasdf"
          type="text"
          name="title"
          role="inputTitle"
          value={book.title}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Send Rating</button>
    </div>
  );
}

export default BookDetails;
