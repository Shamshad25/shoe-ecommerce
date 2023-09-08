import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Cards from "./components/card/Cards";
import CardDetails from "./components/card/CardDetails";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Order from "./components/card/Order";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} index element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/card"} element={<Cards />} />
        <Route path={"/cart/:id"} element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
