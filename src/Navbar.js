import { Link } from 'react-router-dom';
import reactLogo from "./picture/reactLogo.PNG"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={reactLogo} alt="logo" width="80" height="80" /> 
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;