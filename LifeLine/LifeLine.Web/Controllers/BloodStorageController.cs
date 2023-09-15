using LifeLine.DAL; //needs to be removed
using LifeLine.DAL.Entites; //needs to be removed
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LifeLine.Web.Controllers
{
    [ApiController]
    public class BloodStorageController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public BloodStorageController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult Get()
        {
            var bloodStorage = _appDbContext.BloodUnits.ToList();
            return Ok(bloodStorage);
        }
        //add a blood unit
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult Post(BloodUnit bloodUnit)
        {
            _appDbContext.BloodUnits.Add(bloodUnit);
            _appDbContext.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }
    }
}
