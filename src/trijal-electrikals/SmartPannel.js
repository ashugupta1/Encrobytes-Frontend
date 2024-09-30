import React from "react";
import image from "./Images/pannel.jpg";
const SmartPannel = () => {
  return (
    <div className="main-smart-pannel">
      <div>
        <div style={{ margin: "20px" }}>
          <div style={{ fontSize: "45px", fontWeight: "bold" }}>
            Say Hello !
          </div>
          <div style={{ fontSize: "45px", fontWeight: "bold" }}>
            to Smart Panels
          </div>
        </div>
        <ul>
          <li>Designed with energy efficient technologies</li>
          <li>Advanced Safety</li>
          <li>Remote Management Capabilities</li>
          <li>Customizable options to meet specific requirements</li>
        </ul>
      </div>
      <div>
        <img src={image} width={800} height={400} />
      </div>
    </div>
  );
};

export default SmartPannel;
