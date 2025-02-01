import '../css/index.css'

function Form() {
  return (
    <div className="area-content">
      <form className='form-content'>
        <p>Nome</p>
        <input placeholder='Ex: João Maria' className="input input-name" type="text" name="nome" />

        <p>Computador</p>
        <input placeholder='Ex: CAN-01' className="input input-computer" type="text" name="computador" />

        <p>Informe o problema</p>
        <textarea placeholder='Informe...' className="input input-problem" name="problema"></textarea>

        <div className='btn-container'>
          <button className='btn-submit' type='submit'>
            Enviar
          </button>
        </div>

      </form>
    </div>
  )
}

export default Form;
