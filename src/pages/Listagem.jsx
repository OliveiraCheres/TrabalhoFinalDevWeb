import React, { useState, useEffect } from "react";
import api from "../services/api";
import { ColorPreview } from "../components/ColorPreview";

export default function Listagem() {
  const [categoria, setCategoria] = useState("canetas");
  const [produtos, setProdutos] = useState([]);
  const [visibleImages, setVisibleImages] = useState({});

  // busca produtos da categoria
  const buscar = async () => {
    try {
      const resp = await api.get(`/${categoria}`);
      setProdutos(resp.data);
      setVisibleImages({});
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    buscar();
  }, [categoria]);

  // agrupa por marca
  const grupos = produtos.reduce((acc, p) => {
    const m = p.marca || "Sem Marca";
    if (!acc[m]) acc[m] = [];
    acc[m].push(p);
    return acc;
  }, {});

  const toggleImage = (id) => {
    setVisibleImages((v) => ({ ...v, [id]: !v[id] }));
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Listagem de {categoria}</h2>

      <label className="block mb-8">
        <span className="font-medium">Selecione Categoria:</span>{" "}
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="ml-2 px-2 py-1 border rounded"
        >
          <option value="canetas">Canetas</option>
          <option value="tintas">Tintas</option>
          <option value="selos">Selos</option>
        </select>
      </label>

      {Object.entries(grupos).map(([marca, items]) => (
        <section key={marca} className="mb-12">
          {/* divisórias */}
          <hr className="border-t-2 border-[#5c4033] mb-4" />
          <h3 className="text-4xl font-bold text-center mb-2">{marca}</h3>
          <hr className="border-t border-[#5c4033] mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm"
              >
                {/* imagem */}
                {p.imagem ? (
                  <button
                    onClick={() => toggleImage(p.id)}
                    className="mb-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    {visibleImages[p.id] ? "Ocultar imagem" : "Mostrar imagem"}
                  </button>
                ) : (
                  <div className="mb-4 text-gray-500 italic">Sem imagem disponível</div>
                )}
                {visibleImages[p.id] && p.imagem && (
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    className="max-w-[150px] max-h-[150px] object-contain mb-4 border-2 border-gray-200"
                  />
                )}

                {/* dados comuns */}
                <h4 className="text-xl font-semibold mb-2 text-center">{p.nome}</h4>
                <p className="text-sm text-gray-600 mb-2 text-center">
                  {p.descricao}
                </p>
                <p className="font-medium mb-2">R$ {p.preco.toFixed(2)}</p>

                {/* atributos de caneta */}
                {categoria === "canetas" && (
                  <>
                    <p className="mb-1"><strong>Tamanho da Pena:</strong> {p.tamanhoPena}</p>
                    <p className="mb-2"><strong>Tipo de Pena:</strong> {p.tipoPena}</p>
                  </>
                )}

                {/* atributos de tinta / selo */}
                {(categoria === "tintas" || categoria === "selos") && (
                  <ColorPreview corId={p.cor} />
                )}

                {/* botão excluir */}
                <button
                  onClick={async () => {
                    if (window.confirm("Excluir este item?")) {
                      await api.delete(`/${categoria}/${p.id}`);
                      buscar();
                    }
                  }}
                  className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-[#5c4033] mt-8" />
        </section>
      ))}
    </div>
  );
}
