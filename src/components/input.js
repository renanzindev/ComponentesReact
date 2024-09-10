import React from 'react';

// Componente de Input Reutilizável
const Input = ({ placeholder, largura, tipo = 'text', name, value, onChange }) => {
  const estilo = {
    width: largura,     // Define a largura do input
    padding: '10px',    // Define o espaçamento interno
    margin: '5px 0',    // Define a margem superior e inferior
    border: '1px solid #ccc', // Define uma borda simples
    borderRadius: '4px' // Define bordas arredondadas
  };

  return (
    <input 
      type={tipo} 
      placeholder={placeholder} 
      name={name}         // Certifique-se de que 'name' está sendo passado
      value={value}       // Certifique-se de que 'value' está sendo passado
      onChange={onChange} // Certifique-se de que 'onChange' está sendo passado
      style={estilo} 
    />
  );
};

export default Input;