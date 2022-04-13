import { useState } from "react";

const Home = () => {
    const  [name, setName] = useState ('Emong');
    const [age, setAge] = useState (39);

    const handleClick = () => {
        setName('Raymund');
        setAge(40);
    }
   
       

    return (
        <nav className="Home">
            <h2>Home Page</h2>
            <p>{ name } is { age} years old</p>
            <button onClick = {  handleClick }>Click</button>
        </nav>
      );
}
 
export default Home;