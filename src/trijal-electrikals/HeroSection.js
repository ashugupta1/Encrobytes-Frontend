import React from "react";
import McbImage from './Images/Mcb.jpeg'
function HeroSection() {
  return (
    <section id="home">
      <div className="hero1" >
        <div >
          <div style={{ padding:"20px"}}>
            <div
              style={{
                color: "#0f1112",
                fontSize: "50px",
                fontWeight: "bolder",
                paddingTop: "20px",
                marginRight:"50px"
              }}
            >
              Delivering Precision, Quality, and Expertise to Illuminate Your
              Vision.
            </div>
            <div  style={{
                color: "#282929",
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom:"20px",
                marginRight:"50px"
              }}>
              Trijal Electrikals Pvt. Ltd. an ISO 9001:2008 certified company
              based at Faridabad, Haryana is one of the leading manufacturer of
              custom built low tension switchgear and power distribution panels
              of all range and capacity. We have latest machineries which we
              have imported to deliver best quality products in proposed time
              frame.
            </div>
            <button style={{
              color:"white",
              backgroundColor:"red",
              padding: "15px",
              fontSize:"20px",
              borderRadius:"5px"
            }}>Learn More</button>
          </div>
        </div>
        <div>
          <img src={McbImage} width={800} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
