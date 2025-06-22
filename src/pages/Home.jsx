import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#f8f1e4] text-[#5c4033] min-h-screen flex flex-col">
      {/* Banner centralizado */}
      <section className="bg-[#e6c17b] py-16 shadow-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-[Great_Vibes] text-[#5c4033] mb-4">
            Catálogo de Caligrafia
          </h1>
          <p className="text-xl italic">
            Descubra a beleza da escrita clássica e dos materiais que a tornam possíveis.
          </p>
        </div>
      </section>

      {/* Seção com floreios superior e inferior */}
      <section className="relative py-20 overflow-hidden">
        {/* Floreio superior */}
        <img
          src="/assets/Floreio_cima.png"
          alt="Floreio superior"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 opacity-30 z-0"
        />

        {/* Conteúdo centralizado entre os floreios */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { nome: "Canetas Tinteiro", rota: "/listar?categoria=canetas" },
              { nome: "Tintas", rota: "/listar?categoria=tintas" },
              { nome: "Selos de Cera", rota: "/listar?categoria=selos" },
            ].map((cat) => (
              <Link
                key={cat.nome}
                to={cat.rota}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-[#d4b48a]"
              >
                <h3 className="text-xl font-semibold">{cat.nome}</h3>
                <p className="text-sm mt-2">Ver todos os itens</p>
              </Link>
            ))}
          </div>

      <section className="py-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl italic text-[#5c4033]">
            “A tinta conta histórias que nem a memória ousa esquecer.” — <span className="not-italic">Anônimo</span>
          </blockquote>
        </div>
      </section>

      {/* Botão para cadastro */}
      <section className="text-center py-10">
        <Link
          to="/cadastro"
          className="bg-[#5c4033] text-[#f8f1e4] px-6 py-3 rounded-full text-lg hover:bg-[#4a3228] transition"
        >
          Cadastrar novo item
        </Link>
      </section>

          {/* Floreio inferior */}
        <img
          src="/assets/Floreio_baixo.png"
          alt="Floreio inferior"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 opacity-30 z-0"
        />
        
        </div>
      </section>


      {/* Rodapé */}
      <footer className="bg-[#5c4033] text-[#f8f1e4] py-6 text-center mt-auto">
        <p>© 2025 — Desenvolvido por Bruno</p>
        <p>
          <a
            href="https://github.com/seuusuario/catalogo-de-caligrafia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300"
          >
            Ver no GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
