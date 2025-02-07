import React from 'react';
import '../css/index.css';
import { ButtonProps } from '../interfaces/ButtonInterface';

const Button: React.FC<ButtonProps> = ({ dados }) => {
  const handleClick = () => {
    if (!dados.nome) return alert('Nome não pode estar vazio!');
    if (!dados.pcId) return alert('Informe uma máquina!');
    if (!dados.feed) return alert('Informe um problema!');

    console.log({ dados });
  }

  return (
    <div className='btn-container'>
      <button
        onClick={handleClick}
        className='btn-submit' type='submit'>
        Enviar
      </button>
    </div>
  )
}

export default Button;