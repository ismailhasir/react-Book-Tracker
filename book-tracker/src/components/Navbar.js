import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Book Tracker</h1>
        </Link>
        <SearchBar />
        <Link to="/create">New Book</Link>
      </nav>
    </div>
  );
}
