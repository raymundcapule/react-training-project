import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { addContext } from './helper/Context';
import { useState } from 'react';

function App() {

  const [ data, setData ] = useState(null);

  return (
    <HashRouter>
      <addContext.Provider value={{ data, setData }}>
        <div className="App">
          <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/blogs/:id/" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div> 
        </div>
      </addContext.Provider>
    </HashRouter>
  ); 
}

export default App;
