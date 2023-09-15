using LifeLine.DAL.Entites.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeLine.DAL.Entites
{
    public class BloodUnit
    {
        public Guid ID { get; set; }
        public BloodType BloodType { get; set; }
        public BloodRh BloodRh { get; set; }
        public DateTime CollectionDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool IsAvailable { get; set; }
        public int Volume { get; set; }
    }
}
