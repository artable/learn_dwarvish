import React, { Component } from "react"
 
class SingleCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1 className="thing">{this.props.question}, {this.props.answer}, {this.props.dummy}</h1>
        <button onClick={this.props.callback} value={false}>Nextchild</button>
      </div>
    )
  }
}

export default SingleCharacter;
