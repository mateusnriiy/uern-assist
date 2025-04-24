export interface FormDados {
  nome: string,
  pcId: string,
  setorId: string,
  feedback: string
}

export interface FormProps {
  formDados: FormDados;
  setFormDados: React.Dispatch<React.SetStateAction<FormDados>>,
  errors: { nome: boolean; pcId: boolean; setorId: boolean; feedback: boolean },
  setErrors: React.Dispatch<React.SetStateAction<{ nome: boolean; pcId: boolean; feedback: boolean }>>;
}
