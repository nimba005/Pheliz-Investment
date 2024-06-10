import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import Shop from "./Shop.js";
import Services from "./Services.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        {/* Add a route for the Home component */}
        <Route path="/" exact element={() => <h1>Welcome to Pheliz Investment!</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;