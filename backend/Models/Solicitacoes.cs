using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class Solicitacoes
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(3)]
        public string Nome { get; set; }

        [Required]
        public string PcId { get; set; }

        [Required]
        [MinLength(5)]
        public string FeedBack { get; set; }

        public string Departamento { get; set; }
        public string Status { get; set; } = "Pendente";
        public DateTime DataCriacao { get; set; } = DateTime.Now;
    }
}