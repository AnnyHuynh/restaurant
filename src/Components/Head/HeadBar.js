import React, {Component} from "react"
import "./HeadBar.css"
//import { Link } from 'react-router-dom'

class HeadBar extends Component{

  render(){
  return (
      <header className="mainHead">
        <div className="navigationBar">
          <div className="hamburgerBar"></div>
          <div className="logo"><a href="/">Beyond The Bowl</a></div>
          <div className="space" />
          <div className="navList">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Menu">Menu</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </header>
      
                     
                      
  )
  }
}
export default HeadBar;