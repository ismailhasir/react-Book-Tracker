import "./BookList.css";
import { Link } from "react-router-dom";

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
          <div>{book.description.substring(0, 100)}..</div>
          <Link to="">Details.</Link>
        </div>
      ))}
    </div>
  );
}
