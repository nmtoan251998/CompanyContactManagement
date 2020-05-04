using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyContactManagment.Models
{
    public class UserModel
    {
        public enum UserRoleEnum { Admin, Staff }

        public UserModel()
        {
            this.Role = UserRoleEnum.Admin;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Pwd { get; set; }

        [Required]
        public UserRoleEnum Role { get; set; }

        public int Age { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        [ForeignKey("Departments")]
        public int DepartmentId { get; set; }
        public virtual DepartmentModel Department { get; set; }
    }
}
