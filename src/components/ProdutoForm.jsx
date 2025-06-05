// src/components/ProdutoForm.jsx
import React, { useState } from "react";
import api from "../services/api";
import { ColorPreview } from "./ColorPreview";

function ProdutoForm({ categoria }) {
  // Campos comuns
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  // Campos específicos
  const [tamanhoPena, setTamanhoPena] = useState("EF");
  const [tipoPena, setTipoPena] = useState("P"); // “Padrão”
  const [tipoTinta, setTipoTinta] = useState("W");
  const [cor, setCor] = useState(1);
  const [tipoFrasco, setTipoFrasco] = useState("C");
  const [constituicao, setConstituicao] = useState("V");

  function handleSubmit(e) {
    e.preventDefault();

    const dadosBase = {
      nome,
      marca,
      preco: Number(preco),
      descricao,
    };

    let novoProduto = {};

    if (categoria === "canetas") {
      novoProduto = {
        ...dadosBase,
        tamanhoPena,
        tipoPena,
      };
    } else if (categoria === "tintas") {
      novoProduto = {
        ...dadosBase,
        tipoTinta,
        cor,         // inteiro 1–14
        tipoFrasco,
      };
    } else if (categoria === "selos") {
      novoProduto = {
        ...dadosBase,
        cor,          // inteiro 1–14
        constituicao,
      };
    }

    api
      .post(`/${categoria}`, novoProduto)
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        // aqui você pode limpar os estados se quiser
      })
      .catch((err) => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      {/* Campos Comuns */}
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Marca:</label>
      <input
        type="text"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />

      <label>Preço:</label>
      <input
        type="number"
        step="0.01"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      {/* Campos específicos por categoria */}
      {categoria === "canetas" && (
        <>
          <label>Tamanho da Pena:</label>
          <select
            value={tamanhoPena}
            onChange={(e) => setTamanhoPena(e.target.value)}
          >
            <option value="EF">Extra Fino (EF)</option>
            <option value="F">Fino (F)</option>
            <option value="M">Médio (M)</option>
            <option value="B">Grosso (B)</option>
          </select>

          <label>Tipo de Pena:</label>
          <select
            value={tipoPena}
            onChange={(e) => setTipoPena(e.target.value)}
          >
            <option value="P">Padrão (P)</option>
            <option value="X">Flexível (X)</option>
            <option value="I">Itálico (I)</option>
          </select>
        </>
      )}

      {categoria === "tintas" && (
        <>
          <label>Tipo de Tinta:</label>
          <select
            value={tipoTinta}
            onChange={(e) => setTipoTinta(e.target.value)}
          >
            <option value="W">Água (W)</option>
            <option value="O">Óleo (O)</option>
          </select>

          <label>Cor (1 a 14):</label>
          <input
            type="number"
            min="1"
            max="14"
            value={cor}
            onChange={(e) => setCor(Number(e.target.value))}
          />
          <ColorPreview corId={cor} />

          <label>Tipo de Frasco:</label>
          <select
            value={tipoFrasco}
            onChange={(e) => setTipoFrasco(e.target.value)}
          >
            <option value="C">Cartucho (C)</option>
            <option value="T">Tinteiro (T)</option>
          </select>
        </>
      )}

      {categoria === "selos" && (
        <>
          <label>Cor (1 a 14):</label>
          <input
            type="number"
            min="1"
            max="14"
            value={cor}
            onChange={(e) => setCor(Number(e.target.value))}
          />
          <ColorPreview corId={cor} />

          <label>Constituição da Cera:</label>
          <select
            value={constituicao}
            onChange={(e) => setConstituicao(e.target.value)}
          >
            <option value="V">Vela (V)</option>
            <option value="G">Fragmentada (G)</option>
          </select>
        </>
      )}

      <button type="submit" style={{ marginTop: "1rem" }}>
        Cadastrar
      </button>
    </form>
  );
}

export default ProdutoForm;
