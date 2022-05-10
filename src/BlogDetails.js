import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';
import { addContext } from "./helper/Context";
import { useContext } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch ('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate(); 
    const { data, setData } = useContext(addContext);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }) .then(() => {
            navigate('/');
        })
        
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                 <h2> { blog.title }</h2>
                 <p>Written by{ blog.author }</p>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" width="80" height="80" />
                 <div>{ blog.body }</div>
                 <div>{ data }</div>
                 <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;