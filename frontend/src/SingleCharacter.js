import React, { Component } from "react"
 
class SingleCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <h1 className="thing">{this.props.question}, {this.props.answer}, {this.props.dummy[0]}, {this.props.dummy[1]}</h1>
    )
  }
}

export default SingleCharacter;
