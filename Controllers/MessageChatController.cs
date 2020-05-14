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
    [Route("api/message-chat")]
    [ApiController]
    public class MessageChatController : ControllerBase
    {
        private Status status = new Status();
        private readonly CompanyContactContext _context;

        public MessageChatController(CompanyContactContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<MessageChatModel>>> GetMessageChats()
        {
            var messages = await _context.MessageChats.ToListAsync();
            foreach (var message in messages)
            {
                var sender = await _context.Users.FindAsync(message.SenderId);
                if (sender != null)
                {
                    message.Sender = sender;
                }

                var receiver = await _context.Users.FindAsync(message.SenderId);
                if (sender != null)
                {
                    message.Receiver = receiver;
                }
            }

            return messages;
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MessageChatModel>> GetMessageChatModel(int id)
        {
            var messageChatModel = await _context.MessageChats.FindAsync(id);

            if (messageChatModel == null)
            {
                setStatus("fail", "No message found", 404);
                return NotFound(status);
            }

            return messageChatModel;
        }

        // PUT: api/User/
        [HttpPut]
        public async Task<IActionResult> PutMessageChatModel(MessageChatModel message)
        {
            if (message.Id == 0)
            {
                setStatus("fail", "Error in request", 403);
                return BadRequest(status);
            }

            _context.Entry(message).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageChatModelExists(message.Id))
                {
                    setStatus("fail", "No message found", 404);
                    return NotFound(status);
                }
                else
                {
                    throw;
                }
            }
            setStatus("success", "Update message sucessfully", 200);
            return Ok(status);
        }

        // POST: api/MessageChat
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MessageChatModel>> PostMessageChatModel(MessageChatModel message)
        {
            var sender = await _context.Users.FindAsync(message.SenderId);
            if (sender == null)
            {
                setStatus("fail", "No id found with the sender id", 404);
                return NotFound(status);
            }

            var receiver = await _context.Users.FindAsync(message.ReceiverId);
            if (receiver == null)
            {
                setStatus("fail", "No id found with the receiver id", 404);
                return NotFound(status);
            }

            _context.MessageChats.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserModel", new { id = message.Id }, message);
        }

        // DELETE: api/MessageChat/all
        [HttpDelete("all")]
        public async Task<ActionResult<MessageChatModel>> DeleteMessageChats()
        {
            var list = await _context.MessageChats.ToListAsync();
            _context.MessageChats.RemoveRange(list);
            await _context.SaveChangesAsync();
            setStatus("success", "Delete data successfully", 200);
            return Ok(status);
        }

        // DELETE: api/MessageChat/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MessageChatModel>> DeleteMessageChatModel(int id)
        {
            var messageChatModel = await _context.MessageChats.FindAsync(id);
            if (messageChatModel == null)
            {
                setStatus("fail", "No data found", 404);
                return NotFound();
            }

            _context.MessageChats.Remove(messageChatModel);
            await _context.SaveChangesAsync();

            return messageChatModel;
        }        

        private bool MessageChatModelExists(int id)
        {
            return _context.MessageChats.Any(e => e.Id == id);
        }

        private void setStatus(string status_, string message, int code)
        {
            status.status = status_;
            status.message = message;
            status.code = code;
        }
    }
}
