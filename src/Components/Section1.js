import React, {Component} from "react"
import "./Section.css"
//import { Link } from 'react-router-dom'

class Section1 extends Component{

  render(){
  return (
      <header className="headbar">
        <div className="navigationBar">
          <div className="hamburgerBar"></div>
          <div className="logo"><a href="/">Logo</a></div>
          <ul className="navList">
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </header>
      
                     
                      
  )
  }
}
export default Section1;