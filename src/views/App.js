import React, {Component} from "react";
import "./App.css"
import Contact from "../components/contact";

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          contacts: data
        })
      })
      .catch(console.log)
  }

  render() {
    console.log(this.state.contacts.results)
    return (
      <div className="App">
        <Contact contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
