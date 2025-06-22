import React, { useState } from "react";
import api from "../services/api";
import { ColorPreview } from "./ColorPreview";

export default function ProdutoForm({ categoria, onCadastrado }) {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tamanhoPena, setTamanhoPena] = useState("EF");
  const [tipoPena, setTipoPena] = useState("P");
  const [tipoTinta, setTipoTinta] = useState("W");
  const [cor, setCor] = useState(1);
  const [tipoFrasco, setTipoFrasco] = useState("C");
  const [constituicao, setConstituicao] = useState("V");
  const [imagemBase64, setImagemBase64] = useState("");

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagemBase64(reader.result);
    reader.readAsDataURL(file);
  };

  const limpar = () => {
    setNome("");
    setMarca("");
    setPreco("");
    setDescricao("");
    setTamanhoPena("EF");
    setTipoPena("P");
    setTipoTinta("W");
    setCor(1);
    setTipoFrasco("C");
    setConstituicao("V");
    setImagemBase64("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const base = { nome, marca, preco: Number(preco), descricao };
    let dados = {};

    if (categoria === "canetas") {
      dados = { ...base, tamanhoPena, tipoPena, imagem: imagemBase64 };
    } else if (categoria === "tintas") {
      dados = { ...base, tipoTinta, cor, tipoFrasco }; 
      // sem imagem para tintas
    } else if (categoria === "selos") {
      dados = { ...base, cor, constituicao };
      // sem imagem para selos
    }

    try {
      await api.post(`/${categoria}`, dados);
      alert("Produto cadastrado!");
      limpar();
      onCadastrado();
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </label>

      <label>
        Marca:
        <input type="text" value={marca} onChange={e => setMarca(e.target.value)} required />
      </label>

      <label>
        Preço:
        <input type="number" step="0.01" value={preco} onChange={e => setPreco(e.target.value)} required />
      </label>

      <label>
        Descrição:
        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
      </label>

      {categoria === "canetas" && (
        <>
          <label>
            Tamanho da Pena:
            <select value={tamanhoPena} onChange={e => setTamanhoPena(e.target.value)}>
              <option value="EF">Extra Fino</option>
              <option value="F">Fino</option>
              <option value="M">Médio</option>
              <option value="B">Grosso</option>
            </select>
          </label>
          <label>
            Tipo da Pena:
            <select value={tipoPena} onChange={e => setTipoPena(e.target.value)}>
              <option value="P">Padrão</option>
              <option value="X">Flexível</option>
              <option value="I">Itálico</option>
            </select>
          </label>
          {/* upload só para canetas */}
          <label>
            Imagem:
            <input type="file" accept="image/jpeg" onChange={handleImagemChange} />
          </label>
        </>
      )}

      {categoria === "tintas" && (
        <>
          <label>
            Tipo de Tinta:
            <select value={tipoTinta} onChange={e => setTipoTinta(e.target.value)}>
              <option value="W">Água</option>
              <option value="O">Óleo</option>
            </select>
          </label>
          <label>
            Cor:
            <input type="number" min="1" max="14" value={cor} onChange={e => setCor(Number(e.target.value))} />
            <ColorPreview corId={cor} />
          </label>
          <label>
            Tipo de Frasco:
            <select value={tipoFrasco} onChange={e => setTipoFrasco(e.target.value)}>
              <option value="C">Cartucho</option>
              <option value="T">Tinteiro</option>
            </select>
          </label>
        </>
      )}

      {categoria === "selos" && (
        <>
          <label>
            Cor:
            <input type="number" min="1" max="14" value={cor} onChange={e => setCor(Number(e.target.value))} />
            <ColorPreview corId={cor} />
          </label>
          <label>
            Constituição:
            <select value={constituicao} onChange={e => setConstituicao(e.target.value)}>
              <option value="V">Vela</option>
              <option value="G">Fragmentada</option>
            </select>
          </label>
        </>
      )}

      <button type="submit" className="bg-[#5c4033] text-white py-2 rounded mt-4">
        Cadastrar
      </button>
    </form>
  );
}
