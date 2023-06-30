// import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about.js';
import Projects from './projects.js';
import App from './App.js';
function Nav() {
  return (
    <div >
     <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={App} /> */}
        <Route path='/about' component={About} />
        {/* <Route path='/events' component={Events} /> */}
        {/* <Route path='/annual' component={AnnualReport} /> */}
        {/* <Route path='/team' component={Teams} /> */}
        <Route path='/projects' component={Projects} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default Nav;
