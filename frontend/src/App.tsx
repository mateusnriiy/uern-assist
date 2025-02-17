import './css/index.css';
import { useEffect, useState } from 'react';
import Button from './components/Button.tsx';
import Form from './components/Form.tsx';
import Header from './components/Header.tsx';
import SystemLogo from './components/SystemLogo.tsx';
import { FormDados } from './interfaces/FormInterface.ts';
import Footer from './components/Footer.tsx';
import SuccessModal from './components/SuccessModal.tsx';

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

  const [isSuccess, setIsSuccess] = useState(false);

  const handleShowModal = () => {
    if (!errors.nome && !errors.pcId && !errors.feed) setIsSuccess(true);
  }

  useEffect(() => {
    if (isSuccess) {
      setFormDados({ nome: '', pcId: '', feed: '' });
      setErrors({ nome: false, pcId: false, feed: false });
    }
  }, [isSuccess]);

  return (
    <main>
      <div className='layout'>
        <Header />
        <div className='layout-form'>
          <SystemLogo />
          <Form formDados={formDados} setFormDados={setFormDados} errors={errors} setErrors={setErrors} />
          <Button dados={formDados} setErrors={setErrors} onSuccess={handleShowModal} />
        </div>
        <Footer />
      </div>
      <SuccessModal isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
    </main>
  )
}

export default App
