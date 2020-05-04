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
    public class UserController : ControllerBase
    {
        private readonly CompanyContactContext _context;

        public UserController(CompanyContactContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            foreach (var user in users)
            {
                var deparment = await _context.Departments.FindAsync(user.DepartmentId);
                if (deparment != null)
                {
                    user.Department = deparment;
                }
            }

            return users;
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserModel>> GetUserModel(int id)
        {
            var userModel = await _context.Users.FindAsync(id);

            if (userModel == null)
            {
                return NotFound();
            }

            return userModel;
        }

        // PUT: api/User/5
        // add modification method here
        //[HttpPut("{id}")]

        // POST: api/User
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserModel>> PostUserModel(UserModel user)
        {
            var department = await _context.Departments.FindAsync(user.DepartmentId);
            if (department == null)
            {
                return NotFound("No department id found");
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserModel", new { id = user.Id }, user);
        }

        // DELETE: api/Department/all
        [HttpDelete("all")]
        public async Task<ActionResult<UserModel>> DeleteUsers()
        {
            var list = await _context.Users.ToListAsync();
            _context.Users.RemoveRange(list);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserModel>> DeleteUserModel(int id)
        {
            var userModel = await _context.Users.FindAsync(id);
            if (userModel == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userModel);
            await _context.SaveChangesAsync();

            return userModel;
        }

        private bool UserModelExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
