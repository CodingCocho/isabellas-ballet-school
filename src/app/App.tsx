import {Navbar} from '../components/Navbar';
import {Home} from '../pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      {/* Establish the route network for the client */}
      <Router>

          {/* Hold the main for the frontend */}
          <main 
          className="min-h-screen w-full bg-base-100"
          >

            {/* Hold the navbar component */}
            <Navbar />

            {/* Hold all the routes of the client */}
            <Routes>
              
              {/* Hold the home route */}
              <Route element={<Home/>} path="/" />

            </Routes>
          </main>
      
      </Router>
    </>
  )
}

export default App;
