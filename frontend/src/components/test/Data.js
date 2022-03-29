import React, { Component } from "react";
import Lang from './Lang';

class Data extends Component {
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


  render() {
    const dwarvish = this.state.charList.map(element => {
        return element.dwarvish;
    });


    const english = this.state.charList.map(element => {
        return element.english;
    });

    const langAnswers = {
                            answer1: `${dwarvish[1]}`,
                            answer2: `${dwarvish[2]}`,
                            answer3: `${dwarvish[3]}`,
                            answer4: `${dwarvish[4]}`,

                        }


    const langInfo = { 
                        question1: `${english[1]}`, 
                        question2: `${english[2]}`, 
                        question3: `${english[3]}`, 
                        question4: `${english[4]}`, 
                        question5: `${english[5]}`, 
                        question6: `${english[6]}`, 
                        question7: `${english[7]}`, 
                        question8: `${english[8]}`,                       
                        question9: `${english[9]}`, 
                        question10: `${english[10]}`, 
                        question11: `${english[11]}`, 
                    }
    return (
      <main className="content">
      <div className="row">
        <Lang Question1={ langInfo.question1 }/>

        <button>Next</button>
      </div>
    </main>
    )
  }
}
  
export default Data;
