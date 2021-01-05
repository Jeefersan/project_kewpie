using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kewpie.Data.Identity;
using Kewpie.Helpers;
using Kewpie.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LoginModel = Kewpie.Models.LoginModel;


namespace Kewpie.Api
{
    [Route("[controller]")]
    public class AuthController : ApiController
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtTokenCreator _tokenCreator;

        public AuthController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager,
            JwtTokenCreator tokenCreator)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _tokenCreator = tokenCreator;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var signIn = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (!signIn.Succeeded) return BadRequest(new {signIn.IsNotAllowed, signIn.IsLockedOut});

            var user = await _userManager.FindByEmailAsync(model.Email);
            var token = _tokenCreator.Generate(user.Email, user.Id);

            user.RefreshToken = Guid.NewGuid().ToString();

            await _userManager.UpdateAsync(user);

            Response.Cookies.Append("X-Access-Token", token,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});
            Response.Cookies.Append("X-Username", user.UserName,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});
            Response.Cookies.Append("X-Refresh-Token", user.RefreshToken,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});

            return Ok(new
            {
                Email = user.UserName,
                user.Address,
                user.FirstName,
                user.LastName
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (_userManager.Users.Any(u => u.UserName == model.Email))
                return BadRequest($"User with email {model.Email} already exists!");

            var user = new ApplicationUser
                {UserName = model.Email, Email = model.Email, FirstName = model.FirstName, LastName = model.LastName};
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok(new {Message = "User created successfully!"});
            }

            return BadRequest(new {Message = "User registration failed."});
        }

        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok(new {Message = "You are logged out"});
        }

        [HttpGet("refresh")]
        public async Task<IActionResult> Refresh()
        {
            if (!(Request.Cookies.TryGetValue("X-Username", out var userName) &&
                  Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
                return BadRequest();

            var user = _userManager.Users.FirstOrDefault(i => i.UserName == userName && i.RefreshToken == refreshToken);

            if (user == null)
                return BadRequest();

            var token = _tokenCreator.Generate(user.Email, user.Id);

            user.RefreshToken = Guid.NewGuid().ToString();

            await _userManager.UpdateAsync(user);

            Response.Cookies.Append("X-Access-Token", token,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});
            Response.Cookies.Append("X-Username", user.UserName,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});
            Response.Cookies.Append("X-Refresh-Token", user.RefreshToken,
                new CookieOptions() {HttpOnly = true, SameSite = SameSiteMode.Strict});

            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update([FromBody] UpdateUserModel userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _userManager.Users
                .Include(u => u.Address)
                .FirstOrDefault(u => u.UserName == userModel.Email);

            if (user == null)
            {
                return BadRequest(new {Message = "User doesn't exist"});
            }

            user.FirstName = userModel.FirstName;
            user.LastName = userModel.LastName;
            user.Address = userModel.Address;

            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors.FirstOrDefault());
            }

            return Ok(new {Message = "User has been updated successfully "});
        }

        [HttpPost("update/password")]
        public async Task<IActionResult> UpdatePassword([FromBody] UpdatePasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _userManager.Users.FirstOrDefault(u => u.UserName == model.Email);
            var result = await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);

            if (!result.Succeeded)
            {
                return BadRequest(new {Message = result.Errors.FirstOrDefault()});
            }


            return Ok(new {Message = "Password changed successfully!"});
        }
    }
}