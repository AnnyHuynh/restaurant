import React, {Component} from "react"
import "./MainBody.css"
import About from "./About"
import Menu from "./Menu"
import Contact from "./Contact"
import Bio from "./Bio"

class MainBody extends Component{
  render(){
    return (
        <div className="main">
          <div className="sections">
            <About/>
            <Menu />
            <Bio />
            <Contact />
          </div>
  
        </div>
      
    )
  
  }
} 

export default MainBody;