import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="main-why-choose">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div style={{ fontSize: "50px", margin: "10px" }}>
          Why Choose <span style={{ color: "red" }}>Us</span>
        </div>
        <div style={{ fontSize: "20px", margin: "10px" }}>
          Lorem ipsum is simply a dummy text Lorem ipsum is simply a dummy text
          Lorem ipsum is simply a dummy text
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "100px" }}>
        <div className="how-box-Choose">
          <div style={{ fontSize: "30px", margin: "5px" }}>
            Smart Technology
          </div>
          <div style={{ fontSize: "20px", margin: "5px" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
          </div>
        </div>

        <div className="how-box-Choose">
          <div style={{ fontSize: "20px", margin: "5px" }}>
            Certified Expert
          </div>
          <div style={{ fontSize: "20px", margin: "5px" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
          </div>
        </div>

        <div className="how-box-Choose">
          <div style={{ fontSize: "30px", margin: "5px" }}>Eco Technology</div>
          <div style={{ fontSize: "20px" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
          </div>
        </div>

        <div className="how-box-Choose">
          <div style={{ fontSize: "30px", margin: "5px" }}>24*7 Support</div>
          <div style={{ fontSize: "20px", margin: "5px" }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
