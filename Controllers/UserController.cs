using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanyContactManagment.Models;
using Newtonsoft.Json;

namespace CompanyContactManagment.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private Status status = new Status();
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
                setStatus("fail", "user not found", 401);
                return NotFound(status);
            }

            return userModel;
        }

        // PUT: api/User/
        [HttpPut]
        public async Task<IActionResult> PutUserModel(UserModel user)
        {
            if (user.Id == 0)
            {
                setStatus("fail", "Error in request", 403);
                return BadRequest(status);
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserModelExists(user.Id))
                {
                    setStatus("fail", "user not found", 401);
                    return NotFound(status);
                }
                else
                {
                    throw;
                }
            }
            setStatus("success", "update user successfully", 200);
            return Ok(status);
        }

        // POST: api/User
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserModel>> PostUserModel(UserModel user)
        {
            var department = await _context.Departments.FindAsync(user.DepartmentId);
            if (department == null)
            {
                setStatus("fail", "No department id found", 401);
                return NotFound(status);
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
            setStatus("success", "delete user successfully", 200);
            return Ok(status);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserModel>> DeleteUserModel(int id)
        {
            var userModel = await _context.Users.FindAsync(id);
            if (userModel == null)
            {
                setStatus("fail", "User not found", 401);
                return NotFound();
            }

            _context.Users.Remove(userModel);
            await _context.SaveChangesAsync();

            return userModel;
        }


        // POST: api/user/login
        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> Login([FromBody] LoginModel acc)
        {
            
            // check in
            var login_user = await _context.Users.SingleOrDefaultAsync(user => user.Email == acc.Email && user.Pwd == acc.Pwd);
            if (login_user == null)
            {
                setStatus("fail", "incorrect authencation", 401);
                return NotFound(status);
            }
            setStatus("success", "login successfully", 200);

            return login_user;
        }

        private bool UserModelExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        private void setStatus(string status_, string message, int code) {            
            status.status = status_;
            status.message = message;
            status.code = code;
        }
    }
}
