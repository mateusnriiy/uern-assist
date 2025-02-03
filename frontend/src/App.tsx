import Form from './components/Form.tsx';
import './css/index.css';

function App() {
  return (
    <main>
      <div className='layout'>
        <div className='layout-logo'>
          <div className='logo-layoutdti'>
            <img src="../assets/Logo-UernDTI.png" alt="Logo do DTI" className='logo-dti' />
          </div>
        </div>
        <div className='layout-form'>
          <div className='logo-layout'>
            <img src="../assets/Logo-UernAssist.png" alt="Logo do Sistema" className='logo-sistem' />
          </div>
          <Form />
          <div className='btn-container'>
            <button className='btn-submit' type='submit'>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
