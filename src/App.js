import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './Contact';
import logo from "./images/logo.jpeg";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
 
  const [theme,settheme] = useState('dark');

  const toggle = () =>{
    if(theme==='dark')
    {
      settheme('light');
    }
    else{
      settheme('dark');
    }
  }


  useEffect(()=>{
    document.body.className = theme;
  },[theme]);


  return (
    <div className="font-serif font dark:bg-gray-900 bg-sky-100 min-h-screen  dark:text-white text-black max-w-full pb-20">
      <Router>
        <nav>
          <ul>
            <div className=" flex justify-center text-sm md:text-xl">
            <div className='flex justify-between md:w-8/12 items-center w-11/12  mt-2 mb-2'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/"><img src={logo} className="md:w-20 w-10 rounded-full "/></Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li><button onClick={toggle} >🌕</button></li>
            </div>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            </div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </ul>
        </nav>
      </Router>

{/* navbar ends here */}


    </div>
  );
};

// const Home = () => {
//   return <h2>Home</h2>;
// };

// const About = () => {
//   return <h2>About</h2>;
// };

// const Projects = () => {
//   return <h2>Projects</h2>;
// };

// const Contact = () => {
//   return <h2>Contact</h2>;
// };

export default App;