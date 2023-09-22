using LifeLine.BL.Implementations;
using LifeLine.BL.Interfaces;
using LifeLine.DAL;
using LifeLine.DAL.Entites;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace LifeLine.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //configured AppDbContext
            builder.Services.AddScoped(_ => new AppDbContext(builder.Configuration.GetConnectionString("DefaultConnection")));

            //Configured identity
            builder.Services.AddIdentityCore<User>()
                .AddRoles<UserRole>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddSignInManager<SignInManager<User>>();

            //configured Auth
            builder.Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                TokenValidationParameters tokenValidationParameters = new()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidAudience = builder.Configuration["JwtSettings:Audience"],
                    ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:SecretKey"]!)),
                    ValidateIssuerSigningKey = true
                };
            });

            //App services
            builder.Services.AddTransient<IBloodStorageService,BloodStorageService>();
            builder.Services.AddTransient<IAuthService,JWTAuthService>();


            builder.Services.AddAuthorization();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            //configuring CORS
            app.UseCors(options => options.WithOrigins("http://localhost:4200")
                                            .AllowAnyMethod()
                                            .AllowAnyHeader());
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}