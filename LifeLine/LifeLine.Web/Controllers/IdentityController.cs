using LifeLine.BL.Interfaces;
using LifeLine.DAL.Entites;
using LifeLine.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LifeLine.Web.Controllers
{
    public class IdentityController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IAuthService _authService;

        public IdentityController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration, 
            IAuthService authService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _authService = authService;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new User
            {
                UserName = model.Email,
                Email = model.Email,
                UserBloodType = model.UserBloodType,
                UserBloodRh = model.UserBloodRh
                
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok("Utilizatorul a fost înregistrat cu succes.");
            }

            return BadRequest(result.Errors);
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByNameAsync(model.Username);

            if (user == null)
            {
                return Unauthorized("Autentificare eșuată. Numele de utilizator sau parola incorecte.");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                var token = _authService.GenerateJwtToken(user);
                return Ok(new { Token = token });
            }

            return Unauthorized("Autentificare eșuată. Numele de utilizator sau parola incorecte.");
        }
    }
}
