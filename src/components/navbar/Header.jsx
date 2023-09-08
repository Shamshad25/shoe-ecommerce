import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Menu from "@mui/material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import { DELETE, LOGOUT, SEARCH } from "../../redux/action/action";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  const [price, setPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const getData = useSelector((state) => state.cartreducer.carts);
  const activeUser = useSelector((state) => state.cartreducer.activeUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(LOGOUT());
    navigate("/");
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

  const onSearch = (text) => {
    dispatch(SEARCH(text));
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/home" className="text-decoration-none text-dark mx-3">
            ShoeStore
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/home" className="text-decoration-none text-dark mx-3">
              Home
            </NavLink>
          </Nav>
          <Form
            className="d-flex justify-content-center"
            style={{ paddingRight: "20px" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          {activeUser && (
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
          )}
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
                <Button
                  onClick={() => {
                    setAnchorEl(null);
                    navigate("/order");
                  }}
                  variant="danger"
                >
                  Place Order
                </Button>
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
        {activeUser && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "grey",
              position: "relative",
            }}
            onClick={() => setOpenModal(true)}
          >
            <FaUser style={{ width: "20px", height: "20px" }} color="#000" />
            {openModal && (
              <div
                className="d-flex  justify-content-center align-self-center"
                style={{
                  width: "150px",
                  backgroundColor: "#ddd",
                  position: "absolute",
                  right: 0,
                  top: 30,
                  zIndex: 1111,
                  borderRadius: "5px",
                }}
              >
                <button
                  style={{ border: "none", margin: "5px" }}
                  onClick={() => {
                    setOpenModal(false);
                    logout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Header;
