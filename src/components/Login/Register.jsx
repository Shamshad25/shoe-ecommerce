import React, { useState } from "react";
import "../style/Style.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/action/action";

const validId = "abc@gmail.com";
const password = "12345";

const Register = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setEPasswordError] = useState("");
  const [confirmError, setEConfirmError] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
    if (form.fullName.length <= 0) {
      setFullNameError("Name filed cannot be empty!");
    } else if (form.email.lengthlength <= 0) {
      setEmailError("Password filed cannot be empty!");
    } else if (form.password.length <= 0) {
      setEPasswordError("Password filed cannot be empty!");
    } else if (form.confirm.length <= 0) {
      setEConfirmError("Password filed cannot be empty!");
    } else {
      dispatch(LOGIN(form.email));
      navigate("/");
    }
  };

  return (
    <div style={{ backgroundColor: "#ddd", height: "91vh" }}>
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ height: "80vh" }}
      >
        <h1 className="text-center">Sign Up</h1>
        <section className="container mt-3">
          <form
            className="logindetails d-flex flex-column p-4"
            style={{ width: "60%", height: "60vh", backgroundColor: "#fff" }}
            onSubmit={onSubmitForm}
          >
            <div className="">
              <div className="d-flex flex-column" style={{ width: "22vw" }}>
                <label className="">Full Name</label>
                <input
                  type="text"
                  aria-label="Name field"
                  name="fullName"
                  value={form.fullName}
                  onChange={onUpdateField}
                />
              </div>
              <p
                style={{
                  color: "red",
                }}
              >
                {fullNameError}
              </p>
              <div className="d-flex flex-column" style={{ width: "22vw" }}>
                <label className="">Email</label>
                <input
                  type="text"
                  aria-label="Email field"
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
                <label>Password</label>
                <input
                  type="password"
                  aria-label="Password field"
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
              <div className="d-flex flex-column" style={{ width: "" }}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  aria-label="Password field"
                  name="confirm"
                  value={form.confirm}
                  onChange={onUpdateField}
                />
              </div>
              <p
                style={{
                  color: "red",
                }}
              >
                {confirmError}
              </p>
            </div>
            <div className="text-left mb-3 ">
              <Button style={{ width: "22vw" }} variant="dark" type="submit">
                Signup
              </Button>
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/">
                <span>Login</span>
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
