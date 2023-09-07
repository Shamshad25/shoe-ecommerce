import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DELETE } from "../../redux/action/action";

const Header = () => {
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const remove = (id) => {
    dispatch(DELETE(id));
  };

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark mx-3">
            Shoe Fit
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark mx-3">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            sx={{ fontSize: 10 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Details</th>
                  </tr>
                  <i
                    className="fas fa-close smallclose"
                    onClick={handleClose}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 20,
                      fontSize: 23,
                      cursor: "pointer",
                    }}
                  ></i>
                </thead>
                <tbody>
                  {getData &&
                    getData.map((e) => {
                      return (
                        <>
                          <tr key={e.id}>
                            <td>
                              <NavLink
                                to={`./cart/${e.id}`}
                                onClick={handleClose}
                              >
                                <img
                                  src={e.imageURL}
                                  alt="img"
                                  style={{ width: "5rem", height: "5rem" }}
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>{e.name}</p>
                              <p>Price : ${e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => remove(e.id)}
                              >
                                <i className="fas fa-trash smalltrash"></i>
                              </p>
                            </td>

                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => remove(e.id)}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  <p className="text-center">Total : ${price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-item center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
