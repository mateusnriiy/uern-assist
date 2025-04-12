import React from 'react';
import '../css/index.css';
import { ButtonProps } from '../interfaces/ButtonInterface';
import { sendForm } from '../api/api';

const Button: React.FC<ButtonProps> = ({ dados, setErrors, onSuccess }) => {
  const handleClick = async () => {
    const novosErrors = {
      nome: dados.nome.length < 3,
      pcId: dados.pcId === '',
      feedback: dados.feedback.length < 5
    }

    setErrors(novosErrors);

    if (Object.values(novosErrors).some((error) => error)) return;

    try {
      await sendForm(dados);
      onSuccess();
    } catch (error) {
      console.error('Erro no envio', error); //
    }
  }

  return (
    <div className='btn-container'>
      <button
        onClick={handleClick}
        className='btn-submit'
        type='button'
      >
        Enviar
      </button>
    </div>
  )
}

export default Button;