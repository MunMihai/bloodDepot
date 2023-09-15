using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeLine.DAL.Entites
{
    public class User
    {
        [Key]
        public Guid ID { get; set; }
    }
}
