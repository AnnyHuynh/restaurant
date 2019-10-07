import React, {Component} from "react"
import "./Section.css"
import { Link } from 'react-router-dom'
import Route from 'react-router-dom'

class Section1 extends Component{

  render(){
  return (
      <div>
      <nav className="narBar">
        <li><Link to="/"> {this.props.Home}</Link></li>
        <li><Link to="/"> {this.props.Menu}</Link></li>
        <li><Link to="/"> {this.props.Contact}</Link></li>
      </nav>

        <Route
        path="/"
        component={Section1}
        exact 
        />
      </div>
      
                     
                      
  )
  }
}
export default Section1;