import '../css/index.css';
import logoUernDTI from '../../assets/Logo-UernDTI.png'

function Header() {
  return (
    <div className='layout-logo'>
      <div className='logo-layoutdti'>
        <img src={logoUernDTI} alt="Logo do DTI" className='logo-dti' />
      </div>
    </div>
  )
}

export default Header;