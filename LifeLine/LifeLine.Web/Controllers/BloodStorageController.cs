using LifeLine.BL.DTOs;
using LifeLine.BL.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LifeLine.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class BloodStorageController : ControllerBase
    {
        private readonly IBloodStorageService _bloodStorageService;

        public BloodStorageController(IBloodStorageService bloodStorageService)
        {
            _bloodStorageService = bloodStorageService;
        }

        [HttpGet]
        public Task<IEnumerable<BloodUnitDTO>> Get()
        {
            var bloodUnits = _bloodStorageService.GetBloodStorage();
            return bloodUnits;
        }

        [HttpPost]
        public Task Post(BloodUnitDTO bloodUnit)
        {
            _bloodStorageService.AddBloodUnit(bloodUnit);
            return Task.CompletedTask;
        }
        [HttpGet]
        [Route("GetBloodUnit")]
        public Task<BloodUnitDTO> GetBloodUnit(Guid id)
        {
            var bloodUnit = _bloodStorageService.GetBloodUnit(id);
            return bloodUnit;
        }
        [HttpPut]
        public Task Put(BloodUnitDTO bloodUnit)
        {
            _bloodStorageService.UpdateBloodUnit(bloodUnit.ID, bloodUnit);
            return Task.CompletedTask;
        }
        [HttpDelete]
        public Task Delete(Guid id)
        {
            _bloodStorageService.DeleteBloodUnit(id);
            return Task.CompletedTask;
        }
    }
}
