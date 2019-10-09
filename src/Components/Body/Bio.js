import React from "react"
import "./MainBody.css"
import realLogo from "./images/realLogo.png"
// import owners from './images/owners.jpg';

function Bio (){

  // const ourPic = require('./images/owners.jpg');
  return (
      <div className="main">
        <div className="sections">
          <section id="ourBio" className="sectionBio">
            <div className="grid-container">
              <div className ="grid-item" id="bioName" >
              About Our Restaurant
              </div>
              <div className ="grid-item" id="picture">
                {/* <img id="ourPic" src={owners} alt="ourPic" /> */}
              </div> 
              <div className ="grid-item" id="content">
              <div style={{backgroundColor: "rgb(134, 60, 134)", textAlign: "center"}}><img src={realLogo} alt="realLogo" width="300px" height="100px" /></div>
                <p style={{textAlign:"center"}}><b>We Server:</b>
                  <br/>
                  Appertizers
                  <br/>
                  Poke
                  <br/>
                  Udon & Rice Bowls
                  <br/>
                  Desserts & Drinks
                </p>
                <p>At Beyond the Bowl, we work hard to deliver the best foods and goodies, using the best Japanese ingredients with a blend of Northwest cooking techniques. From Poke bowls to our signature dessert menu, you will find yourself satisfied with every bite.</p>
                
              </div>

            </div>

          </section>
        </div>
      </div>
    
  )

}

export default Bio;