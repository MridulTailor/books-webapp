import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Apple } from "./pages/Apple";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { Applet } from "./pages/Applet";
import { Nav } from "./components/Nav";
const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="Apple" element={<Apple />}></Route>
      <Route path="*" element={<Applet />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
