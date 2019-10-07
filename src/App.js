import React, {Component} from "react"
import "./App.css"
import HeadBar from "./Components/Head/HeadBar"
import MainBody from "./Components/Body/MainBody"

class App extends Component{
  render(){
  return(
    <div className="App">
      <HeadBar/>
      <MainBody />

    </div>
  )
  }
}

export default App; 