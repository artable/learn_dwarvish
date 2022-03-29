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
      let activeItem = {};
      activeItem.english = charList[0].english;
      activeItem.cirth = charList[0].dwarvish;
      activeItem.index = 0;
      activeItem.dummy = [this.createDummy(), this.createDummy()];
      this.setState({
        activeItem,
        charList
      })
    } catch (e) {
      console.log(e);
      console.log(this.state);
    }
  }
  createDummy() {
    let character = '+';
    return character;
  }

  childCallback = event => {
    let charList = this.state.charList;
    charList[this.state.activeItem.index].gotCorrect = event.target.value;
    this.setState(
      {charList}
    );
    this.showNext();
  }

  showNext() {
    let next = this.state.charList[this.state.activeItem.index + 1];
    let newActiveItem = {
      index: this.state.activeItem.index + 1,
      english: next.english,
      cirth: next.dwarvish,
      dummy: [this.createDummy(), this.createDummy()]
    };
    this.setState({activeItem: newActiveItem});
    console.log(this.state.activeItem);
  }

  render() {
    console.log(this.state.charList[0]);
    return (
      <div>
        <SingleCharacter
        question={this.state.activeItem.cirth}
        answer={this.state.activeItem.english}
        dummy={this.state.activeItem.dummy}
        callback={this.childCallback}/>
        <button onClick={this.showNext}>Next!</button>
      </div>
    )
  }
}

export default App; 