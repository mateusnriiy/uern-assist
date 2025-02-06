import './css/index.css';
import Button from './components/Button.tsx';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import SystemLogo from './components/SystemLogo.tsx';
import { useState } from 'react';
import { FormDados } from './interfaces/FormInterface.ts';

function App() {
  const [formDados, setFormDados] = useState<FormDados>({
    nome: '',
    pcId: '',
    feed: '',
  })

  return (
    <main>
      <div className='layout'>
        <Header />
        <div className='layout-form'>
          <SystemLogo />
          <Form setFormDados={setFormDados} />
          <Button />
        </div>
      </div>
    </main>
  )
}

export default App
