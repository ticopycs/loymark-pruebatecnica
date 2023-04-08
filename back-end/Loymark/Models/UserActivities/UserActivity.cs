using Loymark.Attributes;
using Loymark.Models.Users;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Loymark.Models.UserActivities
{
    [Table("UserActivities")]
    public class UserActivity : Base
    {
        [Required]
        [JsonConverter(typeof(DateFormatConverter), "yyyy-MM-dd")]
        public DateTime? fechaCracion { get; set; }

        [Required]
        [ForeignKey("userId")]
        public Usuarios Usuarios { get; set; }

        [Required]
        public string Actividad { get; set; }
    }
}
