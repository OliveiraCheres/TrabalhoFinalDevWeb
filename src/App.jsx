// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <div>
      {/* Menu de navegação */}
      <nav style={{ padding: "1rem", backgroundColor: "#5D4037", color: "#FFF8DC" }}>
        <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.5rem", marginRight: "2rem" }}>
          Catálogo de Caligrafia
        </span>
        <Link to="/" style={{ marginRight: "1rem", color: "#FFF8DC" }}>Home</Link>
        <Link to="/cadastro" style={{ marginRight: "1rem", color: "#FFF8DC" }}>Cadastro</Link>
        <Link to="/listar" style={{ color: "#FFF8DC" }}>Listagem</Link>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listar" element={<Listagem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
