// import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, Archivo, Creditos, Error404} from "./components/Index";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Archivo" element={<Archivo/>} />
          <Route path="/Creditos" element={<Creditos/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
        <Footer />
    </Router>
  )
};

export default App;