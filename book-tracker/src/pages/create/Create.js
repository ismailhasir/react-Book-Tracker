import "./Create.css";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      author,
      pages,
      description,
    };
    try {
      await projectFirestore.collection("books").add(doc);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-form">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Book Title:</span>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Book Author:</span>
          <input
            type="text"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          <span>Pages:</span>
          <input
            type="number"
            required
            onChange={(e) => setPages(e.target.value)}
            value={pages}
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>

        <button className="btn">ADD</button>
      </form>
    </div>
  );
}
