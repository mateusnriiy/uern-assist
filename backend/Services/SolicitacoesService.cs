using backend.Data;
using backend.DTO;
using backend.DTOs;
using backend.models;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class SolicitacoesService : ISolicitacoesInterface
    {

        private readonly AppDbContext _context;
        public SolicitacoesService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<ResponseModel<SolicitacoesModel>> BuscarPorId(int idSolicitacoes)
        {
            ResponseModel<SolicitacoesModel> resposta = new ResponseModel<SolicitacoesModel>();
            try
            {
                var solicitacao = await _context.Solicitacoes.FirstOrDefaultAsync(solicitacaoDb => solicitacaoDb.Id == idSolicitacoes);

                if (solicitacao == null)
                {
                    resposta.Mensagem = "Nenhum registro localizado";
                    return resposta;
                }

                resposta.Dados = solicitacao;
                resposta.Mensagem = "Solicitacao localizada"; 

                return resposta;
            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<SolicitacoesModel>>> CriarSolicitacao(SolicitacoesDTO solicitacoesDTO)
        {
            ResponseModel<List<SolicitacoesModel>> resposta = new ResponseModel<List<SolicitacoesModel>>();

            try
            {
                var solicitacao = new SolicitacoesModel()
                {
                    Nome = solicitacoesDTO.Nome,
                    PcId = solicitacoesDTO.PcId,
                    FeedBack = solicitacoesDTO.Feedback,
                    Departamento = solicitacoesDTO.Departamento
                };

                _context.Add(solicitacao);
                resposta.Dados = await _context.Solicitacoes.ToListAsync();
                return resposta;

            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<SolicitacoesModel>>> EditarSolicitacoes(EditarSolicitacoesDTO editarSolicitacoesDTO)
        {
            ResponseModel<List<SolicitacoesModel>> resposta = new ResponseModel<List<SolicitacoesModel>>();

            try
            {
                var solicitacao = await _context.Solicitacoes.FirstOrDefaultAsync(solicitacaoDb => solicitacaoDb.Id == editarSolicitacoesDTO.Id);

                if (solicitacao == null)
                {
                    resposta.Mensagem = "Nenhum registro localizado";
                    return resposta;
                }

                solicitacao.Status = editarSolicitacoesDTO.Status;
                solicitacao.Departamento = editarSolicitacoesDTO.Departamento;

                _context.Update(solicitacao);
                await _context.SaveChangesAsync();

                resposta.Dados = await _context.Solicitacoes.ToListAsync();
                return resposta;

            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<SolicitacoesModel>>> ExcluirSolicitacoes(int idSolicitacao)
        {
            ResponseModel<List<SolicitacoesModel>> resposta = new ResponseModel<List<SolicitacoesModel>>();

            try
            {
                var solicitacao = await _context.Solicitacoes.FirstOrDefaultAsync(solicitacaoDb => solicitacaoDb.Id == idSolicitacao);

                if (solicitacao == null)
                {
                    resposta.Mensagem = "Nenhum registro localizado";
                    return resposta;
                }

                _context.Remove(solicitacao);
                await _context.SaveChangesAsync();

                resposta.Dados = await _context.Solicitacoes.ToListAsync();
                resposta.Mensagem = "Autor Removido com sucesso.";

                return resposta;
            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<SolicitacoesModel>>> ListarTodos()
        {
            ResponseModel<List<SolicitacoesModel>> resposta = new ResponseModel<List<SolicitacoesModel>>();
            try
            {
                var solicitacoes = await _context.Solicitacoes.ToListAsync();

                resposta.Dados = solicitacoes;

                return resposta; 
            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }
    }
}
