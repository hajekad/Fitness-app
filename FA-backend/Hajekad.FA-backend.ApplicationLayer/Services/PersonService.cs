using Hajekad.FA_backend.ApplicationLayer.Services;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace Hajekad.FA_backend.ApplicationLayer.Models;

public class PersonService : IPersonService
{
    private const String cs = "Host=localhost;Username=postgres;Password=' ';Database=fitapp";
    private NpgsqlConnection con;

    public PersonService()
    {
        con = new NpgsqlConnection(cs);
        con.Open();
    }
    
    private int StringToInteger(string src)
    {
        int ret = 0, multi = 1;

        for (int i = src.Length - 1; i != -1; i--)
        {
            ret += (src[i] - '0') * multi;
            multi *= 10;
        }
            
        return ret;
    }

    private string getParam(string par, string sufix)
    {
        var sql = $"SELECT DISTINCT {par} {sufix}";
        Console.WriteLine($"{sql}");
        using var cmd = new NpgsqlCommand(sql, con);
        
        return new string( cmd.ExecuteScalar().ToString());
    }

    public PersonBase GetPersonByUser(string username, string password)
    {
        string sufix =  $"FROM \"user\" WHERE name = '{username}' AND password = '{password}'";

        var id = getParam("id_user", sufix);
        var email = getParam("email", sufix);
        var birth_date = getParam("birth_date", sufix);
        var height = getParam("height", sufix);
        var gender = getParam("gender", sufix);
        
        return new PersonBase(id, username, email, password, birth_date, height, gender);
    }

    public PersonBase GetPersonByEmail(string email, string password)
    {
        string sufix =  $"FROM user WHERE email = '{email}' AND password = '{password}'";

        var id = getParam("id_user", sufix);
        var username = getParam("username", sufix);
        var birth_date = getParam("birth_date", sufix);
        var height = getParam("height", sufix);
        var gender = getParam("gender", sufix);
        
        return new PersonBase(id, username, email, password, birth_date, height, gender);
    }

    public List<PersonBase> GetPersons()
    {
        throw new NotImplementedException();
    }

    public int Createperson(PersonBase person)
    {
        var sql = "INSERT INTO \"user\" (name, email, password, birth_date, height, gender) " +
                  $"VALUES ('{person.name}', '{person.email}', " +
                  $"'{person.password}', '{person.birth_date}', " +
                  $"{StringToInteger(person.height)} , '{person.gender}');";
        
        Console.WriteLine($"{sql}");
        
        using var cmd = new NpgsqlCommand(sql, con);
        
        return cmd.ExecuteNonQuery();
    }

    public bool DeletePerson(int id)
    {
        throw new NotImplementedException();
    }
}