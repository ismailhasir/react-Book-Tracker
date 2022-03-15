import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import BookList from "../../components/BookList";

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/books?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2>Books including '{query}'</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading..</p>}
      {data && <BookList books={data} />}
    </div>
  );
}
