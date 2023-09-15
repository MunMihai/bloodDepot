using LifeLine.DAL.Entites;
using LifeLine.DAL;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using LifeLine.Web.Models;

namespace LifeLine.Web.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {

        public AuthController()
        {

        }
        //create auth service
        [HttpPost]
        [Route("register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Register(UserRegisterViewModel user)
        {
            return Ok();
        }
        //create auth service
        [HttpPost]
        [Route("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Login(BloodUnit bloodUnit)
        {
            return Ok();
        }
    }
}
