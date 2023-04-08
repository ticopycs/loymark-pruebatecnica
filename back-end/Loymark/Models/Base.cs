using Loymark.Attributes;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Loymark.Models
{
    public class Base
    {
        [StringLength(64)]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [JsonConverter(typeof(DateFormatConverter), "yyyy-MM-ddTHH:mm:ss.fffZ")]
        public DateTime? InsertedAt { get; set; }

        [JsonConverter(typeof(DateFormatConverter), "yyyy-MM-ddTHH:mm:ss.fffZ")]
        public DateTime? UpdatedAt { get; set; }
    }
}
