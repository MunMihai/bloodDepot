using LifeLine.DAL.Entites;

namespace LifeLine.BL.Interfaces
{
    public interface IAuthService
    {
        public string GenerateJwtToken(User user);
    }
}
