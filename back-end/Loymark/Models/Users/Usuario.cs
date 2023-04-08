using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Loymark.Attributes;
using Loymark.Models.UserActivities;
using Newtonsoft.Json;


namespace Loymark.Models.Users
{
    [Table("Usuarios")]
    public class Usuarios : Base
    {
        [Required]
        public string nombre { get; set; }

        [Required]
        public string apellido { get; set; }

        [Required]
        public int email { get; set; }

        [Required]
        [JsonConverter(typeof(DateFormatConverter), "yyyy-MM-dd")]
        public DateTime? fechaNacimiento { get; set; }

        public int? telefono { get; set; }

        [Required]
        public bool contacto { get; set; }

        public ICollection<UserActivity> Activities { get; set; }

    }
}