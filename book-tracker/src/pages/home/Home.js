import "./Home.css";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
import BookList from "../../components/BookList";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("books").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No books to load.");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
          console.log(snapshot);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <BookList books={data} />}
    </div>
  );
}
