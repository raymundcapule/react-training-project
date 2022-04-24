import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Website', body:'lorem ipsum...', author: 'emong', id: 1},
        { title: 'Welcome Alcoholic!', body:'lorem ipsum...', author: 'raymund', id: 2},
        { title: 'Web dev ops', body:'lorem ipsum...', author: 'emong', id: 3},
        { title: 'Web dev ops Alcoholic', body:'lorem ipsum...', author: 'emong', id: 4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter (blogs => blogs.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log ('use effect');
        console.log(blogs);
    });

    return (
        <div className="home">
          <BlogList blogs={blogs} title = "Lahat ng Blogs!" handleDelete={handleDelete} />
        </div>
    ) 
}
    
  
 
export default Home;