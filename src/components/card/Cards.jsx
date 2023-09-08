import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/Style.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/action/action";

const Cards = () => {
  const data = useSelector((state) => state.cartreducer.products);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3 text-center">
      <h1>SHOES, CLOTHING & ACCESSORIES SALE: UP TO 60% OFF</h1>
      <p>
        Remake your look for less. Whether you're an avid athlete or seeking a
        fresh streetwear vibe, you'll find the best gear at the ShoeFit shoes
        sale. Save up to 60% off iconic adidas styles like NMD, Stan Smith, and
        Originals.
      </p>
      <div className="row d-flex justify-content-center align-items-center">
        {data &&
          data.map((element) => {
            return (
              <>
                <Card
                  key={element.id}
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imageURL}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Price : ${element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        onClick={() => send(element)}
                        variant="primary"
                        className="col-lg-12"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
