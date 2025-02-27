using backend.DTO;
using backend.DTOs;
using backend.models;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolicitacoesController : ControllerBase
    {
        private readonly ISolicitacoesInterface _solicitacoesInterface;
        public SolicitacoesController(ISolicitacoesInterface solicitacoesInterface)
        {
            _solicitacoesInterface = solicitacoesInterface;
        }

        [HttpGet("ListarTodos")]
        public async Task<ActionResult<ResponseModel<List<SolicitacoesModel>>>> ListarTodos()
        {
            var solicitacoes = await _solicitacoesInterface.ListarTodos();
            return Ok(solicitacoes);
        }

        [HttpGet("BuscarPorId/{idSolicitacoes}")]
        public async Task<ActionResult<ResponseModel<List<SolicitacoesModel>>>> BuscarPorId(int idSolicitacoes)
        {
            var solicitacoes = await _solicitacoesInterface.BuscarPorId(idSolicitacoes);
            return Ok(solicitacoes);
        }

        [HttpPost("CriarSolicitacao")]
        public async Task<ActionResult<ResponseModel<List<SolicitacoesModel>>>> CriarSolicitacao(SolicitacoesDTO solicitacoesDTO)
        {
            var solicitacao = await _solicitacoesInterface.CriarSolicitacao(solicitacoesDTO);
            return Ok(solicitacao);
        }

        [HttpPut("EditarSolicitacoes")]
        public async Task<ActionResult<ResponseModel<List<SolicitacoesModel>>>> EditarSolicitacos(EditarSolicitacoesDTO editarSolicitacoesDTO)
        {
            var solicitacao = await _solicitacoesInterface.EditarSolicitacoes(editarSolicitacoesDTO);
            return Ok(solicitacao);
        }

        [HttpDelete("ExcluirSolicitacoes")]
        public async Task<ActionResult<ResponseModel<List<SolicitacoesModel>>>> ExcluirSolicitacoes(int idSolicitacao)
        {
            var solicitacao = await _solicitacoesInterface.ExcluirSolicitacoes(idSolicitacao);
            return Ok(solicitacao);
        }
    }
}
