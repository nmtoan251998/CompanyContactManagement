using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyContactManagment.Models
{
    public class Status
    {
        public string status { get; set; }

        public string message { get; set; }
        
        public int code { get; set; }
    }
}
