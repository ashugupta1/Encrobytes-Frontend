import React from "react";
import image from "./Images/dbbox.jpg";

function ServicesSection() {
  return (
    <section id="services">
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          margin: "2rem",
        }}
      >
        <div>Innovative Technologies Services To </div>
        <div>Energize Society</div>
      </div>
      <div
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "normal" }}
      >
        <div>
          Lorem ipsum is simply a dummy text Lorem ipsum is simply a dummy text
          Lorem ipsum is simply
        </div>
        <div>a dummy text</div>
      </div>

      <div className="service-button" style={{ textAlign: "center" }}>
        <div
          style={{
            margin: "10px",
            fontSize: "25px",
            backgroundColor: "rgb(28, 28, 85)",
            color: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          Electric Consultancy
        </div>
        <div
          style={{
            margin: "10px",
            fontSize: "25px",
            backgroundColor: "rgb(28, 28, 85)",
            color: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          EPC Service
        </div>
        <div
          style={{
            margin: "10px",
            fontSize: "25px",
            backgroundColor: "rgb(28, 28, 85)",
            color: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          Schneider Prisma Panels
        </div>
        <div
          style={{
            margin: "10px",
            fontSize: "25px",
            backgroundColor: "rgb(28, 28, 85)",
            color: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "7px",
            cursor: "pointer",
          }}
        >
          Power Distribution Panels
        </div>
      </div>
      <div style={{ display: "flex", gap: "4rem", margin: "100px" }}>
        <img src={image} width={700} height={400} />
        <div>
          <div
            style={{
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Power distribution panels
          </div>
          <div
            style={{
              marginBottom: "10px",
              fontWeight: "normal",
              fontSize: "20px",
              width: "500px",
            }}
          >
            Lorem ipsum is simply dummy text of the printing Lorem ipsum is
            simply dummy text of the printing Lorem ipsum is simply dummy text
            of the printing Lorem ipsum is simply dummy text of the printing
            Lorem ipsum is simply dummy text of the printing
          </div>

          <button
            style={{
              fontSize: "25px",
              backgroundColor: "red",
              color: "white",
              margin: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              borderRadius: "7px",
              cursor: "pointer",
            }}
          >
            Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
