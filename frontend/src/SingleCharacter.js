import React, { Component } from "react"
 
class SingleCharacter extends Component {
  constructor(props) {
    super(props);
    //this.showNext = this.showNext.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }
  isCorrect(value) {
    //console.log(value);
    //console.log(this.props.answer);
    if (value == this.props.answer) {
      return true
    }
    else {
      return false
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.props.callback} value={this.isCorrect(this.props.answer)}>{this.props.answer}</button>
        <button onClick={this.props.callback} value={this.isCorrect(this.props.dummy[0])}>{this.props.dummy[0]}</button>
        <button onClick={this.props.callback} value={this.isCorrect(this.props.dummy[1])}>{this.props.dummy[1]}</button>
      </div>
    )
  }
}

export default SingleCharacter;
