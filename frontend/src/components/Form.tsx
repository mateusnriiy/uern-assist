import React, { useState } from 'react';
import '../css/index.css';
import { FormProps } from '../interfaces/FormInterface';

function Form({ setFormDados }: FormProps) {
  const [nome, setNome] = useState<string>('');
  const [pcId, setPcId] = useState<string>('');
  const [feed, setFeed] = useState<string>('');
  const [errors, setErrors] = useState<{ nome: boolean; pcId: boolean; feed: boolean }>({ nome: false, pcId: false, feed: false });

  const pcs = Array.from({ length: 28 }, (_, i) => `CAM-${(i + 1).toString().padStart(2, '0')}`);

  const handleValidation = () => {
    setErrors({
      nome: nome.length < 5,
      pcId: pcId.length < 1,
      feed: feed.length < 3,
    })
  }

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    handleValidation();
    setFormDados((prev) => ({ ...prev, [setter === setNome ? 'nome' : setter === setPcId ? 'pcId' : 'feed']: value }));
  }

  return (
    <div className="area-content">
      <form action='' className='form-content'>
        <label>Nome</label>
        <input placeholder='Ex: João Maria'
          value={nome}
          onChange={(e) => handleChange(setNome, e.target.value)}
          onBlur={handleValidation}
          className={`input input-name ${errors.nome ? 'msg-error' : ''}`}
          type="text" />

        <label>Computador</label>
        <div className='custom-select'>
          <select
            value={pcId}
            className='select-content'
            onChange={(e) => handleChange(setPcId, e.target.value)}>
            <option value="">Selecione uma máquina</option>
            {pcs.map((pc) => (
              <option key={pc} value={pc}>{pc}</option>
            ))}
          </select>
        </div>

        <label>Informe o problema</label>
        <textarea placeholder='Informe...'
          value={feed}
          onChange={(e) => handleChange(setFeed, e.target.value)}
          onBlur={handleValidation}
          className={`input input-name ${errors.feed ? 'msg-error' : ''}`}
          rows={8}>
        </textarea>
      </form>
    </div>
  )
}

export default Form;
