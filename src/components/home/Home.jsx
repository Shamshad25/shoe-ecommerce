import React from "react";
import bg from "../../assets/images/background.jpg";
import nike from "../../assets/images/nike.webp";
import adidas from "../../assets/images/adidas1.png";
import reebok from "../../assets/images/reebok.svg";
import puma from "../../assets/images/puma1.svg";
import "../style/Style.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Cards from "../card/Cards";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <img src={bg} alt="background" />
        <Button
          variant="light"
          className="col-lg-3"
          style={{ position: "absolute", right: 170, bottom: 100 }}
          onClick={() => navigate("/card")}
        >
          Shop Here
        </Button>
      </div>
      <div className="container mt-4 text-center">
        <h2>SHOP BY BRANDS</h2>
      </div>
      <div className="mt-4 text-center" style={{ backgroundColor: "#ddd" }}>
        <div className="container d-flex justify-content-between align-items-center ">
          <img src={nike} alt="nike" style={{ width: "10%", height: "10%" }} />
          <img
            src={adidas}
            alt="adidas"
            style={{ width: "8%", height: "8%" }}
          />
          <img src={puma} alt="puma" style={{ width: "10%", height: "10%" }} />
          <img
            src={reebok}
            alt="reebok"
            style={{ width: "10%", height: "10%" }}
          />
        </div>
      </div>
      <Cards />
      <div
        className="footer container mt-4 mb-4 d-flex justify-content-between"
        style={{ borderTop: "2px solid #ABA7A7" }}
      >
        <div className="mt-2 d-flex flex-column">
          <a href="#">Your Accounts</a>
          <a href="#">Order Status</a>
          <a href="#">Our Warrenty</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="mt-2 d-flex flex-column">
          <a href="#">Exchange and Returns</a>
          <a href="#">Shippings</a>
          <a href="#">Handlings</a>
          <a href="#">Terms and services</a>
        </div>
        <div className="mt-2 d-flex flex-column">
          <a href="#">Sizing Instruction</a>
          <a href="#">Privacy</a>
          <a href="#">About Us</a>
          <a href="#">View Map</a>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#000", height: "10vh" }}
      >
        <div className="d-flex justify-content-between " style={{ gap: 10 }}>
          <FaFacebook style={{ width: "30px", height: "30px" }} color="#fff" />
          <FaSquareInstagram
            style={{ width: "30px", height: "30px" }}
            color="#fff"
          />
          <FaGooglePlus
            style={{ width: "30px", height: "30px" }}
            color="#fff"
          />
          <FaLinkedin style={{ width: "30px", height: "30px" }} color="#fff" />
          <FaSquareWhatsapp
            style={{ width: "30px", height: "30px" }}
            color="#fff"
          />
        </div>
      </div>
      <div className="text-center ">
        <p
          style={{
            backgroundColor: "#000",
            color: "#fff",
            marginBottom: 0,
            fontSize: "12px",
          }}
        >
          © 2023 ShoeStore, Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Home;
