import React from "react"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Lesson1 from "./pages/Lesson1/Lesson1";
import Quiz1 from "./pages/Lesson1/Quiz1";

import Lesson2 from "./pages/Lesson2/Lesson2";
import Quiz2 from "./pages/Lesson2/Quiz2";

import Lesson3 from "./pages/Lesson3/Lesson3";
import Quiz3 from "./pages/Lesson3/Quiz3";

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

        <Route exact path='/lesson1' element={<Lesson1/>}/>
        <Route exact path='/quiz1' element={<Quiz1/>}/>

        <Route exact path='/lesson2' element={<Lesson2/>}/>
        <Route exact path='/quiz2' element={<Quiz2/>}/>

        <Route exact path='/lesson3' element={<Lesson3/>}/>
        <Route exact path='/quiz3' element={<Quiz3/>}/>
      </Routes>
    </Router>
  );
};
   
export default RouterLinks;
