namespace CompanyContactManagment.Models
{
    public class DepartmentDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual CompanyModel Company { get; set; }
    }
}
