import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import CardDetails from "./components/card/details/cardDetails";

function App() {

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CardDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
