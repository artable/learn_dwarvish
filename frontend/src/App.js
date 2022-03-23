import React, { Component } from "react"
import QuizMain from "./components/Quiz/QuizMain";
import Data from "./components/Language/Data";
 
class App extends Component {
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
  renderItems = () => {

    const one = this.state.charList.map(element => {
      return element.dwarvish;
    });

  }
 
  render() {
    return (
      <main className="content">
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <ul className="list-group list-group-flush">
              {this.renderItems()}
              <QuizMain/>
              <Data/>
            </ul>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
  
export default App;
