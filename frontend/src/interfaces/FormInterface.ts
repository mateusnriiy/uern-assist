export interface FormDados {
  nome: string,
  pcId: string,
  feedback: string,
  departamento?: string
}

export interface FormProps {
  formDados: FormDados;
  setFormDados: React.Dispatch<React.SetStateAction<FormDados>>,
  errors: { nome: boolean; pcId: boolean; feedback: boolean },
  setErrors: React.Dispatch<React.SetStateAction<{ nome: boolean; pcId: boolean; feedback: boolean }>>;
}
