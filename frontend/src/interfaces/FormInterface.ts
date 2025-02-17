export interface FormDados {
  nome: string,
  pcId: string,
  feed: string,
}

export interface FormProps {
  formDados: FormDados;
  setFormDados: React.Dispatch<React.SetStateAction<FormDados>>,
  errors: { nome: boolean; pcId: boolean; feed: boolean },
  setErrors: React.Dispatch<React.SetStateAction<{ nome: boolean; pcId: boolean; feed: boolean }>>;
}
