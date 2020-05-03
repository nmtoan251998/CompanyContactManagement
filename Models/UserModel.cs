using System;
using System.ComponentModel.DataAnnotations;

namespace CompanyContactManagment.Models
{
    public class UserModel
    {
        public enum UserRoleEnum { Admin, Staff }

        public UserModel()
        {
            Role = UserRoleEnum.Admin;
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

        [Required]
        public virtual DepartmentModel department_id { get; set; }

        public DateTime Dob { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }
    }
}
