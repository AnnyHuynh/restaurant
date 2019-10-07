import React, {Component} from "react"
import "./App.css"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"

class App extends Component{
  render(){
  return(
    <div>
      <Section1 Home = "About" Menu = "Menu" Contact = "Contact Us"/>
      <Section2 />

    </div>
  )
  }
}

export default App; 