using System.ComponentModel.DataAnnotations;

namespace backend.DTOs
{
    public class SolicitacoesDTO
    {
        [Required(ErrorMessage = "O nome é obrigatório.")]
        [MinLength(3, ErrorMessage = "O nome deve ter pelo menos três caracteres.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "A Máquina é obrigatória.")]
        public string PcId { get; set; }

        [Required(ErrorMessage = "O Feedback é obrigatório.")]
        [MinLength(5, ErrorMessage = "A descrição precisa ter pelo menos cinco caracteres.")]
        public string Feedback { get; set; }

        [Required(ErrorMessage = "O departamento é obrigatório.")]
        public string Departamento { get; set; }
    }
}