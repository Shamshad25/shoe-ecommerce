import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Cards from "./components/card/Cards";
import CardDetails from "./components/card/CardDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} index element={<Cards />} />
        <Route path={"/cart/:id"} element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
