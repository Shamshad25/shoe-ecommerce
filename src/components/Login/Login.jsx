import React, { useState } from "react";
import "../style/Style.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/action/action";

const validId = "admin@gmail.com";
const password = "admin123";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setEPasswordError] = useState("");

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
    if (form.email.length <= 0) {
      setEmailError("Email filed cannot be empty!");
    } else if (form.password.length <= 0) {
      setEPasswordError("Password filed cannot be empty!");
    } else {
      if (form.email === validId && form.password === password) {
        dispatch(LOGIN(form.email));
        navigate("/home");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#ddd", height: "100vh" }}>
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ height: "80vh" }}
      >
        <h1 className="text-center">Login</h1>
        <section className="container mt-3">
          <form
            className="logindetails d-flex flex-column p-4"
            style={{ width: "60%", height: "60vh", backgroundColor: "#fff" }}
            onSubmit={onSubmitForm}
          >
            <div className="">
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
            </div>
            <div className="text-left mb-3 ">
              <Button style={{ width: "22vw" }} variant="dark" type="submit">
                Login
              </Button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
