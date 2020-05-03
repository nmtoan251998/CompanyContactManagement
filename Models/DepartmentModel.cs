using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanyContactManagment.Models
{
    public class DepartmentModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int company_id { get; set; }

        public ICollection<CompanyModel> Company { get; }
    }
}
