import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addContext } from "./helper/Context";
import { useContext } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Emong');
    const [isPEnding, setIsPending] = useState(false);
    const navigate = useNavigate();
    const { data, setData } = useContext(addContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author};

      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }) .then(() => {
        console.log('new blog added');
        setIsPending(false);
        navigate("/");
      }) 
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value="Emong">Emong</option>
                  <option value="Raymund">Raymund</option>
                  <option value="Mamon">Mamon</option>
                </select>
                { !isPEnding && <button>Add blog</button> }
                { isPEnding && <button disabled>Adding blog...</button> }
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
                <div>{ data }</div>
            </form>
        </div>
    );
}

export default Create;