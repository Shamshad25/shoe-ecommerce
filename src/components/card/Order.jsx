import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Order = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setEPasswordError] = useState("");
  const [price, setPrice] = useState(0);
  const delivery = 50;
  const tax = 20;

  const getData = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form, null, 2));
    if (form.email.length <= 0) {
      setEmailError("Delivery address filed cannot be empty!");
    } else if (form.password.length <= 0) {
      setEPasswordError("Card details filed cannot be empty!");
    } else {
      alert("Order Placed Successful");
      navigate("/home");
    }
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div
        className="container mt-2 d-flex flex-column "
        style={{ height: "90vh" }}
      >
        <h2 className="text-left">
          Order #<strong>184</strong>
        </h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {getData.length && (
              <div
                className="card_details"
                style={{ width: "100%", padding: 10 }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getData &&
                      getData.map((e) => {
                        return (
                          <>
                            <tr key={e.id}>
                              <td>
                                <NavLink to={`./cart/${e.id}`}>
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
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    <p className="text-left">Total : ${price}</p>
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </section>

        <div className="container iteamsdetails">
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <div>
              <h4>Payment Summery</h4>
              <p>SubTotal : </p>
              <p>Delivery : </p>
              <p>Tax : </p>
              <p>Total : ${price}</p>
            </div>
            <div className="mt-4 pt-3">
              <p>${price}</p>
              <p>$50</p>
              <p>$20</p>
              <p>${price + delivery + tax}</p>
            </div>
          </div>
        </div>

        <div className="container iteamsdetails ">
          <h4>Delivery Details</h4>
          <div className="d-flex flex-column">
            <form onSubmit={onSubmitForm}>
              <div className="">
                <div className="d-flex flex-column" style={{ width: "22vw" }}>
                  <label className="">Delivery Address</label>
                  <input
                    type="text"
                    aria-label="delivery field"
                    name="email"
                    value={form.email}
                    onChange={onUpdateField}
                  />
                </div>
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {emailError}
                </p>
                <div className="d-flex flex-column" style={{ width: "" }}>
                  <label>Payment Card</label>
                  <input
                    type="password"
                    aria-label="Number field"
                    name="password"
                    value={form.password}
                    onChange={onUpdateField}
                  />
                </div>
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {passwordError}
                </p>
              </div>
              <div className="text-left mb-3 ">
                <Button style={{ width: "22vw" }} variant="dark" type="submit">
                  Confirm Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
