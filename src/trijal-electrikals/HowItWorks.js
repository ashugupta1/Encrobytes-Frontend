import React from "react";

const HowItWorks = () => {
  return (
    <div className="How-it-works">
      <div style={{ textAlign: "center", color: "white" }}>
        <div style={{ fontSize: "3rem", margin: "1rem" }}>How It Works</div>
        <div style={{ fontSize: "2rem", margin: "1rem" }}>
          Use cutting-edge automation and advanced technologies to deliver the
          service/product.
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <div className="how-box">
          <div style={{ fontSize: "30px", margin: "5px" }}>Custom Design</div>
          <div style={{ fontSize: "25px", margin: "5px" }}>
            Lorem ispum is a dummy text
          </div>
        </div>

        <div className="how-box">
          <div style={{ fontSize: "30px", margin: "5px" }}>
            Client Consultation
          </div>
          <div style={{ fontSize: "25px", margin: "5px" }}>
            Lorem ispum is a dummy text
          </div>
        </div>

        <div className="how-box">
          <div style={{ fontSize: "30px", margin: "5px" }}>
            Precision Manufacturing
          </div>
          <div style={{ fontSize: "25px", margin: "5px" }}>
            Lorem ispum is a dummy text
          </div>
        </div>

        <div className="how-box">
          <div style={{ fontSize: "30px", margin: "5px" }}>
            Timely Installation
          </div>
          <div style={{ fontSize: "25px", margin: "5px" }}>
            Lorem ispum is a dummy text
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
