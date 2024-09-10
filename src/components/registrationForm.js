import React, { useState } from 'react';
import Input from './input';  // Verifique o caminho e o case
import Botao from './botao';  // Verifique o caminho e o case
import '../styles/stylesForm.css'; // Verifique o caminho para o CSS

function RegistrationForm({ onVoltar, titulo }) {

  const [formData, setFormData] = useState({
    primeiroNome: '',
    ultimoNome: '',
    genero: '',
    email: '',
    idAluno: '',
    disciplina: '',
  });

  const [errors, setErrors] = useState({});
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('Atualizando formData:', formData); // Debugging
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.primeiroNome.trim()) {  // Use .trim() para evitar espaços em branco
      tempErrors.primeiroNome = "Primeiro nome é obrigatório";
      isValid = false;
    }
  

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Email inválido";
      isValid = false;
    }


    if (!formData.genero) {
      tempErrors.genero = "Selecione um gênero";
      isValid = false;
    }

    // Adicione outras validações conforme necessário

    setErrors(tempErrors);
    console.log('Erros encontrados:', tempErrors);  // Debugging
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    console.log('Dados no envio:', formData); // Debugging
    if (validate()) {
      setMensagem("Formulário enviado com sucesso!");
      setErrors({});
      // Adicione aqui o que deseja fazer após a validação bem-sucedida
    } else {
      setMensagem("Por favor, corrija os erros acima.");
    }
  };

  return (
    <div className="form-container">
      <Header title={titulo} subtitle="Preencha o formulário com atenção para se registrar" />
      
      <FormSection label="Nome do Aluno">
        <div className="inline-inputs">
          <Input
            placeholder="Primeiro Nome"
            largura="48%"
            name="primeiroNome"
            value={formData.primeiroNome}
            onChange={handleChange}
          />
          {errors.primeiroNome && <p className="error">{errors.primeiroNome}</p>}
          
          <Input
            placeholder="Último Nome"
            largura="48%"
            name="ultimoNome"
            value={formData.ultimoNome}
            onChange={handleChange}
          />
        </div>
      </FormSection>

      <FormSection label="Gênero">
        <select
          className="select"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        {errors.genero && <p className="error">{errors.genero}</p>}
      </FormSection>

      <FormSection label="E-mail do Aluno">
        <Input
          placeholder="ex: meuemail@exemplo.com"
          largura="100%"
          tipo="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </FormSection>

      <FormSection label="ID do Aluno">
        <Input
          placeholder="ID"
          largura="100%"
          name="idAluno"
          value={formData.idAluno}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection label="Lista de Disciplinas">
        <select
          className="select"
          name="disciplina"
          value={formData.disciplina}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="matematica">Matemática</option>
          <option value="ciencias">Ciências</option>
          <option value="historia">História</option>
        </select>
      </FormSection>

      <div className="submit-button">
      <Botao texto="Enviar" cor="green" onClick={handleSubmit} />
        <Botao texto="Voltar" cor="red" onClick={onVoltar} />
      </div>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

const Header = ({ title, subtitle }) => (
  <header className="form-header">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
);

const FormSection = ({ label, children }) => (
  <div className="form-group">
    <label>{label}</label>
    {children}
  </div>
);


export default RegistrationForm;