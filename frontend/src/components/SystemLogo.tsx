import '../css/index.css';
import logoUernAssist from '../../assets/Logo-UernAssist.png';

function SystemLogo() {
  return (
    <div className='logo-layout'>
      <img src={logoUernAssist} alt="Logo do Sistema" className='logo-system' />
    </div>
  )
}

export default SystemLogo;