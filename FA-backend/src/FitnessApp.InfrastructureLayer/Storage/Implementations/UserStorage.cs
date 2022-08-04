using FitnessApp.DomainLayer.Models;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using Npgsql;

namespace FitnessApp.InfrastructureLayer.Storage.Implementations;

public class UserStorage : IUserStorage
{
    private const string cs = "Host=localhost;Username=postgres;Password=' ';Database=minutyprozd";
    private NpgsqlConnection con;
    
    public UserStorage()
    {
        con = new NpgsqlConnection(cs);
       
        con.Open();
    }
    
    public int CreateUser(User userModel)
    {
        string sql = $"insert into \"user\" (sex, educational_attainment, birth_year) values ('{userModel._sex}', '{userModel._edu}', {userModel._birthYear})";

        using var cmd = new NpgsqlCommand(sql, con);
        
        cmd.ExecuteScalar();
        
        string retSql = $"SELECT currval('user_id_user_seq');";

        using var cmdRet = new NpgsqlCommand(retSql, con);

        return Int32.Parse(cmdRet.ExecuteScalar().ToString());
    }
}