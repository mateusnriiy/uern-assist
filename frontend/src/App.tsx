import './css/index.css';
import Button from './components/Button.tsx';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import SystemLogo from './components/SystemLogo.tsx';

function App() {
  return (
    <main>
      <div className='layout'>
        <Header />
        <div className='layout-form'>
          <SystemLogo />
          <Form />
          <Button />
        </div>
      </div>
    </main>
  )
}

export default App
