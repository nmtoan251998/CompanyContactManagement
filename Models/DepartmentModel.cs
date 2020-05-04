using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyContactManagment.Models
{
    public class DepartmentModel
    {
        public DepartmentModel() {}

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [ForeignKey("Companies")]

        public int CompanyId { get; set; }
        public virtual CompanyModel Company { get; set; }
    }
}
