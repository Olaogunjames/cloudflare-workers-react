import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Auth'
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;