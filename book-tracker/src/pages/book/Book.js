import "./Book.css";
import { projectFirestore } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Book() {
  const [book, setBook] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("books")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setBook(doc.data());
        } else {
          setIsPending(false);
          setError("Could not fetch that book");
        }
      });
    return () => unsub();
  }, [id]);

  return (
    <div className="book">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading..</p>}
      {book && (
        <div>
          <h2 className="book-title">{book.title}</h2>
          <p>Number of Pages: {book.pages}</p>
          <h3>Author: {book.author}</h3>
          <p className="desc">{book.description}</p>
        </div>
      )}
    </div>
  );
}
