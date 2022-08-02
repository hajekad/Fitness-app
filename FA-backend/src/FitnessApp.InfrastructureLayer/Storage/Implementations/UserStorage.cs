using FitnessApp.DomainLayer.Models;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using Npgsql;

namespace FitnessApp.InfrastructureLayer.Storage.Implementations;

public class UserStorage : IUserStorage
{
    private const string cs = "Host=localhost;Username=postgres;Password=' ';Database=6minut";
    private NpgsqlConnection con;
    
    public UserStorage()
    {
        con = new NpgsqlConnection(cs);
        con.Open();
    }
    public void CreateUser(User userModel)
    {
        // insert into person (id_person, name, surname, skin_colour) values (3, 'Nat', 'Waith', 'olive');

        var sql = $"insert into user(id_user, sex, educational_attainment, birth_date) values ({userModel._id}, '{userModel._sex.ToString()}', '{userModel._edu.ToString()}', {userModel._birth.ToString()})";

        using var cmd = new NpgsqlCommand(sql, con);

        var version = cmd.ExecuteScalar().ToString();
    }
}