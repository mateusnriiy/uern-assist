using Microsoft.EntityFrameworkCore;
using backend.models;
using backend.Data;

namespace backend.Services
{
    public class SolicitacoesService
    {
        private readonly AppDbContext _context;

        public SolicitacoesService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Solicitacoes> CriarSolicitacao(Solicitacoes novaSolicitacao)
        {
            _context.Solicitacoes.Add(novaSolicitacao);
            await _context.SaveChangesAsync();
            return novaSolicitacao;
        }

        public async Task<List<Solicitacoes>> GetSolicitacoes()
        {
            return await _context.Solicitacoes.ToListAsync();
        }

        public async Task<Solicitacoes?> GetSolicitacaoPorId(int id)
        {
            return await _context.Solicitacoes.FindAsync(id);
        }

        public async Task<List<Solicitacoes>> GetSolicitacoesConcluidas()
        {
            return await _context.Solicitacoes.Where(s => s.Status == "Concluído").ToListAsync();
        }

        public async Task<bool> AtualizarSolicitacao(int id, Solicitacoes solicitacaoAtt)
        {
            var solicitacao = await _context.Solicitacoes.FindAsync(id);

            if (solicitacao == null) return false;

            solicitacao.Status = solicitacaoAtt.Status;
            //solicitacao.FeedBack = solicitacaoAtt.FeedBack;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeletarSolicitacao(int id)
        {
            var solicitacao = await _context.Solicitacoes.FindAsync(id);

            if (solicitacao == null) return false;

            _context.Solicitacoes.Remove(solicitacao);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}