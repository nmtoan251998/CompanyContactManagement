using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyContactManagment.Models
{
    public class LoginModel
    {
        public string Email { get; set; }

        public string Pwd { get; set; }
    }
}
