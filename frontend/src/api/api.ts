import axios from 'axios';
import { FormDados } from '../interfaces/FormInterface';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const sendForm = async (dados: FormDados) => {
  try {
    const response = await api.post('/Solicitacoes/CriarSolicitacao', dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar dados para o backend', error);
    throw error;
  }
};
