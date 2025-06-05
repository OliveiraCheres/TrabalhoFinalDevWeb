// src/components/ProdutoLista.jsx
import React from "react";
import api from "../services/api";

function ProdutoLista({ categoria, produtos, onAtualizar }) {
  if (!produtos || produtos.length === 0) {
    return <p>Nenhum produto cadastrado nesta categoria.</p>;
  }

  // Função para excluir um produto
  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      api
        .delete(`/${categoria}/${id}`)
        .then(() => {
          onAtualizar(); // sinalizar ao componente pai que precisa buscar novamente a lista
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Marca</th>
          <th>Preço</th>
          <th>Descrição</th>
          {categoria === "canetas" && (
            <>
              <th>Tamanho Pena</th>
              <th>Tipo Pena</th>
            </>
          )}
          {categoria === "tintas" && (
            <>
              <th>Tipo Tinta</th>
              <th>Cor</th>
              <th>Frasco</th>
            </>
          )}
          {categoria === "selos" && (
            <>
              <th>Cor</th>
              <th>Constituição</th>
            </>
          )}
          {/* Nova coluna para ações */}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((p) => (
          <tr key={p.id}>
            <td>{p.nome}</td>
            <td>{p.marca}</td>
            <td>{p.preco.toFixed(2)}</td>
            <td>{p.descricao}</td>

            {categoria === "canetas" && (
              <>
                <td>{p.tamanhoPena}</td>
                <td>{p.tipoPena}</td>
              </>
            )}
            {categoria === "tintas" && (
              <>
                <td>{p.tipoTinta}</td>
                <td>{p.cor}</td>
                <td>{p.tipoFrasco}</td>
              </>
            )}
            {categoria === "selos" && (
              <>
                <td>{p.cor}</td>
                <td>{p.constituicao}</td>
              </>
            )}
            {/* Botão Excluir */}
            <td>
              <button
                onClick={() => handleExcluir(p.id)}
                style={{
                  backgroundColor: "#b71c1c",
                  color: "#fff",
                  border: "none",
                  padding: "4px 8px",
                  cursor: "pointer",
                  borderRadius: "4px"
                }}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProdutoLista;
