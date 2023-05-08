import { useState } from "react";
import { HomePage, FilmsPage } from "./pages/index.js";
import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App(props) {}

return (
  <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "currPath" : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="films"
              className={({ isActive }) => (isActive ? "currPath" : null)}
            >
              Films
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* http://localhost:3000/ */}
        <Route path="/" element={<HomePage />} />
        {/* http://localhost:3000/films */}
        <Route path="films" element={<FilmsPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
