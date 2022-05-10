import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { addContext } from "./helper/Context";
import { useContext } from "react";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch ('http://localhost:8000/blogs');

    const { data, setData } = useContext(addContext);

    return (
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title = "All Blogs"/>}
            <div>{ data }</div>
            <button onClick={() => setData("Data Updated")}>Update Data</button>
        </div>
    ) 
}
    
  
 
export default Home;