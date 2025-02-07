export interface FormDados {
  nome: string,
  pcId: string,
  feed: string,
}

export interface FormProps {
  setFormDados: React.Dispatch<React.SetStateAction<FormDados>>;
}
