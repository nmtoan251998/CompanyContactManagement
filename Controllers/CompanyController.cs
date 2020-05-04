using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanyContactManagment.Models;

namespace CompanyContactManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly CompanyContactContext _context;

        public CompanyController(CompanyContactContext context)
        {
            _context = context;
        }

        // GET: api/Company
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<CompanyModel>>> GetCompanies()
        {
            return await _context.Companies.ToListAsync();
        }

        // GET: api/Company/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyModel>> GetCompanyModel(int id)
        {
            var companyModel = await _context.Companies.FindAsync(id);

            if (companyModel == null)
            {
                return NotFound();
            }

            return companyModel;
        }

        // PUT: api/Company/5
        // add modification method here
        [HttpPut("{id}")]

        // POST: api/Company
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CompanyModel>> PostCompanyModel(CompanyModel companyModel)
        {
            _context.Companies.Add(companyModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyModel", new { id = companyModel.Id }, companyModel);
        }

        // DELETE: api/Department/all
        [HttpDelete("all")]
        public async Task<ActionResult<CompanyModel>> DeleteCompanies()
        {
            var list = await _context.Companies.ToListAsync();
            _context.Companies.RemoveRange(list);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Company/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CompanyModel>> DeleteCompanyModel(int id)
        {
            var companyModel = await _context.Companies.FindAsync(id);
            if (companyModel == null)
            {
                return NotFound();
            }

            _context.Companies.Remove(companyModel);
            await _context.SaveChangesAsync();

            return companyModel;
        }

        private bool CompanyModelExists(int id)
        {
            return _context.Companies.Any(e => e.Id == id);
        }
    }
}
