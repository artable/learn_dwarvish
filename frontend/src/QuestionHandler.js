import React, { Component } from 'react';
import Answer from './components/Quiz/QuizMained/Answer/Answer'
import Scorecard from './components/Quiz/QuizMained/Answer/Scorecard';

class QuestionHandler extends Component {
  constructor(props) {
    super(props);
    this.showNext = this.showNext.bind(this);
    this.createDummy = this.createDummy.bind(this);
    this.returnScore = this.returnScore.bind(this);
    this.renderView = this.renderView.bind(this);
    console.log(this.props.api)

    this.state = {
      activeItem: {
        index: -1,
        english: '',
        cirth: '',
        dummy: [],
      },
      charList: props.charList,
      quizCompleted: false,
      };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/vowels");
      const charList = await res.json();
      //TODO this is hecka gross and should be factored into a seperate method
      //even if initialization has to be handled seperate everytime
      this.setState({ charList });
      let activeItem = {};
      activeItem.english = charList[0].english;
      activeItem.cirth = charList[0].dwarvish;
      activeItem.index = 0;
      activeItem.dummy = [this.createDummy(), this.createDummy()];
      this.setState({ activeItem });
    } catch (e) {
      console.log(e);
      console.log(this.state);
    }
  }

  createDummy() {
    return this.state.charList[
      Math.floor(Math.random() * (this.state.charList.length - 1))
    ].dwarvish;
  }

  childCallback = event => {
    let charList = this.state.charList;
    charList[this.state.activeItem.index].isCorrect = event.target.value;
    this.setState({ charList });
    this.showNext();
  };
  showNext() {
    if (this.state.activeItem.index >= this.state.charList.length - 1) {
      this.state.quizCompleted = true;
    } else {
      let next = this.state.charList[this.state.activeItem.index + 1];
      let newActiveItem = {
        index: this.state.activeItem.index + 1,
        english: next.english,
        cirth: next.dwarvish,
        dummy: [this.createDummy(), this.createDummy()],
      };
    
      while (
        newActiveItem.dummy[0] == newActiveItem.dummy[1] || 
        newActiveItem.dummy[0] == newActiveItem.cirth ||
        newActiveItem.dummy[1] == newActiveItem.cirth
        ) {
          newActiveItem.dummy = [this.createDummy(), this.createDummy()]
        };
        
        this.setState({activeItem: newActiveItem});
    }
  }

  returnScore() {
    let correctAmount = 0;
    let incorrectAmount = 0;
    for (let i = 0; i < this.state.charList.length; i++) {
      if (this.state.charList[i].isCorrect == 'true') {
        correctAmount += 1;
      }
    }
    incorrectAmount = this.state.charList.length - correctAmount;
    console.log("correct amount: ", correctAmount, "incorrect amount: ", incorrectAmount);
    return [correctAmount, incorrectAmount];
  }

  renderView(props) {
    const quizCompleted = this.state.quizCompleted;
    if (quizCompleted) {
      return <Scorecard score={this.returnScore()}/>
    } else {
      return <Answer 
        question={this.state.activeItem.english}
        answer={this.state.activeItem.cirth}
        dummy={this.state.activeItem.dummy}
        callback={this.childCallback}
        />
}
  }

  render() {
    console.log(this.state.charList);
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}
export default QuestionHandler;
