using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanyContactManagment.Models
{
    public class MessageChatModel
    {
        public MessageChatModel() {}

        [Key]
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public bool IsSeen { get; set; }

        [ForeignKey("Users")]
        public int SenderId { get; set; }

        [ForeignKey("Users")]
        public int ReceiverId { get; set; }

        public virtual UserModel Sender { get; set; }
        public virtual UserModel Receiver { get; set; }
    }
}
