using System.ComponentModel.DataAnnotations;

namespace CompanyContactManagment.Models
{
    public class CompanyModel
    {
        public CompanyModel() {}

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
