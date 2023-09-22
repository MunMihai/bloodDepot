using LifeLine.BL.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeLine.BL.Interfaces
{
    public interface IBloodStorageService
    {
        Task<IEnumerable<BloodUnitDTO>> GetBloodStorage();
        Task<IEnumerable<BloodUnitDTO>> GetBloodStoragePaginated(int count, int page);
        Task<BloodUnitDTO> GetBloodUnit(Guid id);
        Task AddBloodUnit(BloodUnitDTO bloodUnit);
        Task<BloodUnitDTO> UpdateBloodUnit(Guid id, BloodUnitDTO bloodUnit);
        Task DeleteBloodUnit(Guid id);
    }
}
