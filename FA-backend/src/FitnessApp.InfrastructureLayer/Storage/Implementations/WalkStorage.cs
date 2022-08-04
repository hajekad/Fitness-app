using FitnessApp.DomainLayer.Models;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using Npgsql;

namespace FitnessApp.InfrastructureLayer.Storage.Implementations;

public class WalkStorage : IWalkStorage
{
    private const string cs = "Host=localhost;Username=postgres;Password=' ';Database=minutyprozd";
    private NpgsqlConnection con;

    public WalkStorage()
    {
        con = new NpgsqlConnection(cs);
       
        con.Open();
    }
    
    public int CreateWalk(Walk walkModel)
    {
        string sql = $"insert into \"walk\" (id_user, date, distance, start_lat, start_long, end_lat, end_long) values ({walkModel._user_id}, '{walkModel._date.Year}-{walkModel._date.Month}-{walkModel._date.Day}', {walkModel._distance}, {walkModel._startLat}, {walkModel._startLong}, {walkModel._endLat}, {walkModel._endLong})";

        using var cmd = new NpgsqlCommand(sql, con);
        
        cmd.ExecuteScalar();
        
        string retSql = $"SELECT currval('walk_id_walk_seq');";

        using var cmdRet = new NpgsqlCommand(retSql, con);

        return Int32.Parse(cmdRet.ExecuteScalar().ToString());
    }

    public List<Walk> GetWalksRelatedTo(int idUser)
    {
        throw new NotImplementedException();
    }
}