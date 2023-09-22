using LifeLine.BL.DTOs;
using LifeLine.BL.Interfaces;
using LifeLine.DAL;
using Microsoft.EntityFrameworkCore;

namespace LifeLine.BL.Implementations
{
    public class BloodStorageService : IBloodStorageService
    {
        private readonly AppDbContext _appDbContext;

        public BloodStorageService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public Task AddBloodUnit(BloodUnitDTO bloodUnit)
        {
            _appDbContext.BloodUnits.AddAsync(BloodUnitDTO.ToBloodUnit(bloodUnit));
            return _appDbContext.SaveChangesAsync();
        }

        public Task DeleteBloodUnit(Guid id)
        {
            _appDbContext.BloodUnits.Remove(_appDbContext.BloodUnits.Find(id)!);
            return _appDbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<BloodUnitDTO>> GetBloodStorage()
        {
            var bloodUnits = await _appDbContext.BloodUnits.ToListAsync();
            return bloodUnits.Select(x => new BloodUnitDTO(x));
        }

        public Task<IEnumerable<BloodUnitDTO>> GetBloodStoragePaginated(int count, int page)
        {
            var bloodUnits = _appDbContext.BloodUnits.Skip(count * page).Take(count).ToList();
            return Task.FromResult(bloodUnits.Select(x => new BloodUnitDTO(x)));
        }

        public Task<BloodUnitDTO> GetBloodUnit(Guid id)
        {
            var bloodUnit = _appDbContext.BloodUnits.Find(id);
            return Task.FromResult(new BloodUnitDTO(bloodUnit!));
        }

        public Task<BloodUnitDTO> UpdateBloodUnit(Guid id, BloodUnitDTO bloodUnit)
        {
            _appDbContext.BloodUnits.Update(BloodUnitDTO.ToBloodUnit(bloodUnit));
            return Task.FromResult(bloodUnit);
        }
    }
}
