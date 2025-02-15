import '../css/index.css';
import React, { useState } from 'react';
import { FormProps } from '../interfaces/FormInterface';

function Form({ setFormDados, errors, setErrors }: FormProps) {
  const [nome, setNome] = useState<string>('');
  const [pcId, setPcId] = useState<string>('');
  const [feed, setFeed] = useState<string>('');

  const pcs = Array.from({ length: 28 }, (_, i) => `CAN-${(i + 1).toString().padStart(2, '0')}`);

  const handleValidation = (campo: string, value: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: campo === 'pcId' ? value === '' : value.length < (campo === 'nome' ? 3 : 5)
    }))
  }

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string, campo: string) => {
    setter(value);
    setFormDados((prev) => ({ ...prev, [campo]: value }));
    handleValidation(campo, value)
  }

  return (
    <div className="area-content">
      <form action='' className='form-content'>
        <div>
          <label>Nome</label>
          <input placeholder='Ex: João Maria'
            value={nome}
            onChange={(e) => handleChange(setNome, e.target.value, 'nome')}
            onBlur={(e) => handleValidation('nome', e.target.value)}
            className={`input input-name ${errors.nome ? 'ef-error' : ''}`}
            type="text" />
          {errors.nome && <span style={{ marginTop: "5px" }} className='msg-error'>Nome deve ter pelo menos três caracteres.</span>}
        </div>

        <div className='custom-select'>
          <label>Computador</label>
          <select
            value={pcId}
            className={`select-content ${errors.pcId ? 'ef-error' : ''}`}
            onBlur={(e) => handleValidation('pcId', e.target.value)}
            onChange={(e) => handleChange(setPcId, e.target.value, 'pcId')}>
            <option disabled={true} value="">Selecione uma máquina</option>
            {pcs.map((pc) => (
              <option key={pc} value={pc}>{pc}</option>
            ))}
          </select>
          {errors.pcId && <span style={{ marginTop: "5px" }} className='msg-error'>Selecione uma máquina para prosseguir.</span>}
        </div>

        <div>
          <label>Informe o problema</label>
          <textarea placeholder='Informe detalhes do problema'
            value={feed}
            onChange={(e) => handleChange(setFeed, e.target.value, 'feed')}
            onBlur={(e) => handleValidation('feed', e.target.value)}
            className={`input input-problem ${errors.feed ? 'ef-error' : ''}`}
            rows={8}>
          </textarea>
          {errors.feed && <span className='msg-error'>Descreva o problema para prosseguir.</span>}
        </div>
      </form>
    </div>
  )
}

export default Form;
