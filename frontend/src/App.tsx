import './css/index.css';
import Button from './components/Button.tsx';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import SystemLogo from './components/SystemLogo.tsx';
import { useState } from 'react';
import { FormDados } from './interfaces/FormInterface.ts';
import Footer from './components/Footer.tsx';

function App() {
  const [formDados, setFormDados] = useState<FormDados>({
    nome: '',
    pcId: '',
    feed: '',
  })

  const [errors, setErrors] = useState<{ nome: boolean; pcId: boolean; feed: boolean }>({
    nome: false,
    pcId: false,
    feed: false
  })

  return (
    <main>
      <div className='layout'>
        <Header />
        <div className='layout-form'>
          <SystemLogo />
          <Form setFormDados={setFormDados} errors={errors} setErrors={setErrors} />
          <Button dados={formDados} setErrors={setErrors} />
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
