using backend.DTO;
using backend.DTOs;
using backend.models;
using backend.Models;

namespace backend.Services
{
    public interface ISolicitacoesInterface
    {
        Task<ResponseModel<List<SolicitacoesModel>>> ListarTodos();
        Task<ResponseModel<SolicitacoesModel>> BuscarPorId(int IdSolicitacoes);
        Task<ResponseModel<List<SolicitacoesModel>>> CriarSolicitacao(SolicitacoesDTO solicitacoesDTO);
        Task<ResponseModel<List<SolicitacoesModel>>> EditarSolicitacoes(EditarSolicitacoesDTO editarSolicitacoesDTO );
        Task<ResponseModel<List<SolicitacoesModel>>> ExcluirSolicitacoes(int idSolicitacao);

    }
}
