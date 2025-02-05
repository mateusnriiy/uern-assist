import '../css/index.css';

function Form() {
  return (
    <div className="area-content">
      <form action='' className='form-content'>
        <label>Nome</label>
        <input placeholder='Ex: João Maria' className="input input-name" type="text" name="nome" />

        <label>Computador</label>
        <input placeholder='Ex: CAN-01' className="input input-computer" type="text" name="computador" />

        <label>Informe o problema</label>
        <textarea placeholder='Informe...'
          className="input input-problem"
          name="problema"
          rows={8}>
        </textarea>
      </form>
    </div>
  )
}

export default Form;
