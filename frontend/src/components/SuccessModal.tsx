import '../css/index.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <DotLottieReact
          src="https://lottie.host/a0779e0f-b3a5-48b3-bf3f-a13b6eb71a48/6KVSaTM3SC.lottie"
          autoplay
        />
        <span className='modal-btn material-symbols-outline' onClick={onClose}>X</span>
      </div>
    </div>
  )
}

export default SuccessModal;

