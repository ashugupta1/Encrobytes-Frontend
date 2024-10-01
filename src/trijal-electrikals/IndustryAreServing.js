import React from "react";
import manufact from "./Images/manu.png";
import Energy from "./Images/Energy.png";
import Oil from "./Images/Oil.png";

const IndustryAreServing = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(28, 28, 85)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          color: "white",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        Industries We Are <span style={{ color: "red" }}>Serving</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <img src={manufact} width={300} />
        </div>

        <div>
          <img src={Energy} width={300} />
        </div>

        <div>
          <img src={Oil} width={300} />
        </div>

        <div>
          <img src={Oil} width={300} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <img src={manufact} width={300} />
        </div>

        <div>
          <img src={Energy} width={300} />
        </div>

        <div>
          <img src={Oil} width={300} />
        </div>

        <div>
          <img src={Oil} width={300} />
        </div>
      </div>
    </div>
  );
};

export default IndustryAreServing;
