import React from 'react';

// Componente de Botão Reutilizável
const Botao = ({ texto, cor, onClick }) => {
  const estilo = {
    backgroundColor: cor,  // Define a cor do botão
    color: 'white',        // Define a cor do texto do botão
    padding: '10px 20px',  // Define o espaçamento interno do botão
    border: 'none',        // Remove a borda
    borderRadius: '5px',   // Define bordas arredondadas
    cursor: 'pointer',     // Muda o cursor ao passar sobre o botão
  };

  return (
    <button style={estilo} onClick={onClick}>
      {texto}  {/* Define o texto dentro do botão */}
    </button>
  );
};

export default Botao;