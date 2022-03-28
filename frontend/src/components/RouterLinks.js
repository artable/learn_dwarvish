import React from "react"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";
 
const RouterLinks = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about-us' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
};
   
export default RouterLinks;
