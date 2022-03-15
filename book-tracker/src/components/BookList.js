import "./BookList.css";
import { Link } from "react-router-dom";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

export default function BookList({ books }) {
  const handleClick = (id) => {
    projectFirestore.collection("books").doc(id).delete();
  };
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
          <div>{book.description.substring(0, 100)}..</div>
          <Link to={`/books/${book.id}`}>Details.</Link>
          <img
            className="delete"
            src={Trashcan}
            onClick={() => handleClick(book.id)}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
