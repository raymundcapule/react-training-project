import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Website', body:'lorem ipsum...', author: 'emong', id: 1},
        { title: 'Welcome Alcoholic!', body:'lorem ipsum...', author: 'raymund', id: 2},
        { title: 'Web dev ops', body:'lorem ipsum...', author: 'emong', id: 3}
    ]);

    const [name, setName] = useState('emong');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter (blogs => blogs.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log ('use effect');
    }, []);

    return (
        <div className="home">
        {blogs && <BlogList blogs={blogs} title = "Lahat ng Blogs!"/>}
        </div>
    ) 
}
    
  
 
export default Home;