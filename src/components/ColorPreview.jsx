// src/components/ColorPreview.jsx
import React from "react";

const cores = {
  1: { nome: "Azul", hex: "#0000FF" },
  2: { nome: "Azul Claro", hex: "#ADD8E6" },
  3: { nome: "Verde Piscina", hex: "#40E0D0" },
  4: { nome: "Verde", hex: "#008000" },
  5: { nome: "Verde Limão", hex: "#BFFF00" },
  6: { nome: "Amarelo Esverdeado", hex: "#CCCC00" },
  7: { nome: "Amarelo", hex: "#FFD700" },
  8: { nome: "Laranja", hex: "#FFA500" },
  9: { nome: "Vermelho", hex: "#FF0000" },
  10: { nome: "Lilás", hex: "#C8A2C8" },
  11: { nome: "Roxo", hex: "#800080" },
  12: { nome: "Branco",           hex: "#FFFFFF" },
  13: { nome: "Cinza",            hex: "#A9A9A9" },
  14: { nome: "Preto",            hex: "#000000" },
};

export const ColorPreview = ({ corId }) => {
  const cor = cores[corId];
  if (!cor) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: cor.hex,
          border: "1px solid #000",
        }}
      ></div>
      <span>{`${corId} - ${cor.nome}`}</span>
    </div>
  );
};
