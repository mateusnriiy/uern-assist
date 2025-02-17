import { FormDados } from './FormInterface';

export interface ButtonProps {
  dados: FormDados,
  setErrors: React.Dispatch<React.SetStateAction<{ nome: boolean; pcId: boolean; feed: boolean }>>,
  onSuccess: () => void;
}