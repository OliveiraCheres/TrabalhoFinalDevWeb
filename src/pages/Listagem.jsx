import React, { useState, useEffect } from "react";
import ProdutoLista from "../components/ProdutoLista";
import api from "../services/api";

function Listagem() {
  const [categoria, setCategoria] = useState("canetas");
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = () => {
    api
      .get(`/${categoria}`)
      .then((resp) => setProdutos(resp.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    buscarProdutos();
  }, [categoria]);

  return (
    <div>
      <h2>Listagem de Produtos</h2>
      <label>
        Selecione Categoria:
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="canetas">Canetas Tinteiro</option>
          <option value="tintas">Tintas</option>
          <option value="selos">Selos de Cera</option>
        </select>
      </label>
      <ProdutoLista
        categoria={categoria}
        produtos={produtos}
        onAtualizar={buscarProdutos}
      />
    </div>
  );
}

export default Listagem;
