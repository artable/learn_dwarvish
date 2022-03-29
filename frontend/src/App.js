import React, { Component } from "react"
import QuizMain from "./components/Quiz/QuizMain";
import SingleCharacter from "./SingleCharacter"
import Data from "./components/Language/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.showNext = this.showNext.bind(this);
    this.createDummy = this.createDummy.bind(this);

    this.state = {
      activeItem: {
        index: 0,
        english: "",
        cirth: "",
        dummy: [],
      },
      charList: []
      };
  }
 
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/all');
      const charList = await res.json();
      //TODO this is hecka gross and should be factored into a seperate method
      //even if initialization has to be handled seperate everytime
      this.setState({ charList })
      let activeItem = {};
      activeItem.english = charList[0].english;
      activeItem.cirth = charList[0].dwarvish;
      activeItem.index = 0;
      activeItem.dummy = [this.createDummy(), this.createDummy()];
      this.setState({ activeItem })
      // console.log(this.state);
    } catch (e) {
      console.log(e);
      console.log(this.state);
    }
  }
  
  createDummy() {
    return this.state.charList[Math.floor(Math.random() * (this.state.charList.length - 1))].dwarvish;
  }
  
  showNext() {
    let next = this.state.charList[this.state.activeItem.index + 1];
    let newActiveItem = {
      index: this.state.activeItem.index + 1,
      english: next.english,
      cirth: next.dwarvish,
      dummy: [this.createDummy(), this.createDummy()]
    };

    while (
      newActiveItem.dummy[0] == newActiveItem.dummy[1] || 
      newActiveItem.dummy[0] == newActiveItem.cirth ||
      newActiveItem.dummy[1] == newActiveItem.cirth
    ) {
      newActiveItem.dummy = [this.createDummy(), this.createDummy()]
    }

    this.setState({activeItem: newActiveItem});
  }

  render() {
    return (
      <div>
        <SingleCharacter
        question={this.state.activeItem.english}
        answer={this.state.activeItem.cirth}
        dummy={this.state.activeItem.dummy}/>
        <button onClick={this.showNext}>Next!</button>
      </div>
    )
  }
}

export default App;