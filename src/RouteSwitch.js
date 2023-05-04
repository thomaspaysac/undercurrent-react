import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Musique from "./pages/Musique";
import JeuxVideo from "./pages/JeuxVideo";
import Livres from "./pages/Livres";
import Nouveautés from "./pages/Nouveautés";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Nouveautés />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/jeuxvideo" element={<JeuxVideo />} />
        <Route path="/livres" element={<Livres />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;