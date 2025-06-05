import React, { useState } from 'react';
import ProdutoForm from '../components/ProdutoForm';
import { ColorPreview } from '../components/ColorPreview.jsx';


function Cadastro() {
  const [categoria, setCategoria] = useState('canetas');

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <label>
        Selecione Categoria:
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="canetas">Canetas Tinteiro</option>
          <option value="tintas">Tintas</option>
          <option value="selos">Selos de Cera</option>
        </select>
      </label>
      <ProdutoForm categoria={categoria} />
    </div>
  );
}

export default Cadastro;
