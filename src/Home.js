import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Website', body:'lorem ipsum...', author: 'emong', id: 1},
        { title: 'Welcome Alcoholic!', body:'lorem ipsum...', author: 'raymund', id: 2},
        { title: 'Web dev ops Alcoholic', body:'lorem ipsum...', author: 'mamon', id: 3}
    ]);

    return (
        <div className="home">
          <BlogList blogs={blogs} title = "Lahat ng Blogs!" />
        </div>
    ) 
}
    
  
 
export default Home;