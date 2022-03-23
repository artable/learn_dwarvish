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
//   renderItems = () => {

//     const one = this.state.charList.map(element => {
//       return element.dwarvish;
//     });

//     return one;
//   }
 
  render() {
    const dwarvish = this.state.charList.map(element => {
        return element.dwarvish;
    });

    // const english = this.state.charList.map(element => {
    //     return element.dwarvish;
    // });

    // const english = this.state.charList.map(element => {
    //     return element.english;
    // });




    const langInfo = {
                        dwarvish: `${dwarvish[0]}`,
                    }
    return (
      <main className="content">
      <div className="row">
        <Lang langed={ langInfo }/>
      </div>
    </main>
    )
  }
}
  
export default Data;
