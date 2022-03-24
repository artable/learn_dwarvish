import React, { Component } from "react"
import QuizMain from "./components/Quiz/QuizMain";
import Data from "./components/Language/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        english: "",
        cirth: "",
      },
      charList: []
      };
  }
 
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/all');
      const charList = await res.json();
      this.setState({
        charList
      });
    } catch (e) {
      console.log("failed to fetch");
      console.log(e);
      console.log(this.state);
    }
  }
  create_dummy() {
    let character = 'a';
    return character
  }

  render() {
    return (
      <div>{this.state.charList.map(listElement =>
        (<QuizMain
        question={listElement.dwarvish}
        answer={listElement.english}
        dummy={[this.create_dummy(), this.create_dummy]}
      />))}</div>
    )
  }
}
  
export default App;
