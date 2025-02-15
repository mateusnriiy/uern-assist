import React from 'react';
import '../css/index.css';
import { ButtonProps } from '../interfaces/ButtonInterface';

const Button: React.FC<ButtonProps> = ({ dados, setErrors }) => {
  const handleClick = () => {
    const novosErrors = {
      nome: dados.nome.length < 3,
      pcId: dados.pcId === '',
      feed: dados.feed.length < 3
    }

    setErrors(novosErrors);

    if (Object.values(novosErrors).some((error) => error)) return;

    alert('Tudo ok!');
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