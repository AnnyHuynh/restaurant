import React, {Component} from "react"
import "./HeadBar.css"
//import { Link } from 'react-router-dom'

class HeadBar extends Component{

  render(){
  return (
      <header className="mainHead">
        <div className="navigationBar">
          <div className="hamburgerBar"></div>
          <div className="logo"><a href="/">Logo</a></div>
          <div className="space" />
          <div className="navList">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>
      
                     
                      
  )
  }
}
export default HeadBar;