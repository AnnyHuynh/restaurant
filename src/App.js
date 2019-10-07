import React, {Component} from "react"
import "./App.css"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"

class App extends Component{
  render(){
  return(
    <div className="App">
      <Section1 />
      <Section2 />

    </div>
  )
  }
}

export default App; 