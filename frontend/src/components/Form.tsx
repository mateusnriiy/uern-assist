import '../css/index.css';
import { FormProps } from '../interfaces/FormInterface';

function Form({ formDados, setFormDados, errors, setErrors }: FormProps) {
  const pcs = Array.from({ length: 28 }, (_, i) => `MIC-${(i + 1).toString().padStart(2, '0')}`);
  const setores = ["Laboratório CAN", "Laboratório CC"];

  const handleValidation = (campo: string, value: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: campo === 'pcId' ? value === '' : value.length < (campo === 'nome' ? 3 : 5)
    }))
  }

  const handleChange = (value: string, campo: string) => {
    setFormDados((prev) => ({ ...prev, [campo]: value }));
    handleValidation(campo, value)
  }

  return (
    <div className="area-content">
      <form action='' className='form-content'>
        <div>
          <label>Nome</label>
          <input placeholder='Ex: João Maria'
            value={formDados.nome}
            onChange={(e) => handleChange(e.target.value, 'nome')}
            onBlur={(e) => handleValidation('nome', e.target.value)}
            className={`input input-name ${errors.nome ? 'ef-error' : ''}`}
            type="text" />
          {errors.nome && <span style={{ marginTop: "5px" }} className='msg-error'>Nome deve ter pelo menos três caracteres.</span>}
        </div>

        <div className='custom-select'>
          <label>Setor</label>
          <select
            value={formDados.setorId || ""}
            className={`select-content ${errors.setorId ? 'ef-error' : ''}`}
            onBlur={(e) => handleValidation('setorId', e.target.value)}
            onChange={(e) => handleChange(e.target.value, 'setorId')}>
            <option disabled={true} value="">Selecione um setor</option>
            {setores.map((setor) => (
              <option key={setor} value={setor}>{setor}</option>
            ))}
          </select>
          {errors.setorId && <span style={{ marginTop: "5px" }} className='msg-error'>Selecione um setor para prosseguir.</span>}
        </div>

        <div className='custom-select'>
          <label>Computador</label>
          <select
            value={formDados.pcId}
            className={`select-content ${errors.pcId ? 'ef-error' : ''}`}
            onBlur={(e) => handleValidation('pcId', e.target.value)}
            onChange={(e) => handleChange(e.target.value, 'pcId')}>
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
            value={formDados.feedback}
            onChange={(e) => handleChange(e.target.value, 'feedback')}
            onBlur={(e) => handleValidation('feed', e.target.value)}
            className={`input input-problem ${errors.feedback ? 'ef-error' : ''}`}
            rows={8}>
          </textarea>
          {errors.feedback && <span className='msg-error'>Descreva o problema para prosseguir.</span>}
        </div>
      </form>
    </div>
  )
}

export default Form;
