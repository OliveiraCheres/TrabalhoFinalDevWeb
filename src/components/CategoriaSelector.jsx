import React from 'react';

function CategoriaSelector({ categoria, setCategoria }) {
  return (
    <label>
      Categoria:
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="canetas">Canetas Tinteiro</option>
        <option value="tintas">Tintas</option>
        <option value="selos">Selos de Cera</option>
      </select>
    </label>
  );
}

export default CategoriaSelector;
