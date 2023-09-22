using LifeLine.DAL.Entites;
using LifeLine.DAL.Entites.Enums;

namespace LifeLine.BL.DTOs
{
    public class BloodUnitDTO
    {
        public BloodUnitDTO(BloodUnit bloodUnit)
        {
            this.BloodRh = (BloodRhDTO)bloodUnit.BloodRh;
            this.BloodType = (BloodTypeDTO)bloodUnit.BloodType;
            this.CollectionDate = bloodUnit.CollectionDate;
            this.ExpirationDate = bloodUnit.ExpirationDate;
            this.IsAvailable = bloodUnit.IsAvailable;
            this.Volume = bloodUnit.Volume;
            this.ID = new Guid(bloodUnit.ID.ToString());
        }
        public BloodUnitDTO()
        {
        }
        public static BloodUnit ToBloodUnit(BloodUnitDTO bloodUnitDTO)
        {
            return new BloodUnit
            {
                ID = new Guid(bloodUnitDTO.ID.ToString()),
                BloodRh = (BloodRh)bloodUnitDTO.BloodRh,
                BloodType = (BloodType)bloodUnitDTO.BloodType,
                CollectionDate = bloodUnitDTO.CollectionDate,
                ExpirationDate = bloodUnitDTO.ExpirationDate,
                IsAvailable = bloodUnitDTO.IsAvailable,
                Volume = bloodUnitDTO.Volume
            };
        }

        public Guid ID { get; set; }
        public DateTime CollectionDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool IsAvailable { get; set; }
        public int Volume { get; set; }
        public BloodTypeDTO BloodType { get; set; }
        public BloodRhDTO BloodRh { get; set; }
    }
}
