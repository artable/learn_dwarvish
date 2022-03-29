import React from "react"
import Lesson1Quiz from './components/Quiz/QuizMained/Lesson1Quiz'
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";
 
const App = () => {

  

  return (
    <div>
      <section className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about-us' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
      </section>

      <section>
        <Lesson1Quiz/>
      </section>
    </div>

  );
};
   
export default App;
