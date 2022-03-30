import { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props);
    //this.showNext = this.showNext.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
    this.answerList = this.answerList.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }


  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  answerList() {
    const arrayList = [];
    arrayList.push(
      <button onClick={this.props.callback} value={true}>
        {this.props.answer}
      </button>
    );
    for (let i = 0; i < this.props.dummy.length; i++) {
      arrayList.push(
        <button onClick={this.props.callback} value={false}>
          {this.props.dummy[i]}
        </button>
      );
    }

    return this.shuffle(arrayList);

  }



  isCorrect(value) {
    //console.log(value);
    //console.log(this.props.answer);
    if (value == this.props.answer) {
      return true;
    } else {
      return false;
    }
  }
  render() {

    return (
      <div>
        <div>
          What is this character in Cirth?
          <h3>
          {this.props.question}
          </h3>
          </div>
        {this.answerList()}
      </div>
    );
  }
}

export default Answer;
