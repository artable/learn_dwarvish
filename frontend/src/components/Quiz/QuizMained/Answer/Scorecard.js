import React, { Component } from "react";
import './Scorecard.css';

class Scorecard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Here's your score!</h1>
                <div>
                    Correct: {this.props.score[0]} \
                    Incorrect: {this.props.score[1]}
                </div>
            </div>
        )
    }
}
export default Scorecard