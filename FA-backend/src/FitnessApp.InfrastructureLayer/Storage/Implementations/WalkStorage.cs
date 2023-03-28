using System.Collections;
using System.Data;
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
        List<Walk> ret = new List<Walk>();

        string sql = $"SELECT Distinct * FROM walk WHERE id_user = {idUser}";

        using var cmd = new NpgsqlCommand(sql, con);

        cmd.CommandType = CommandType.Text;

        using (var reader = cmd.ExecuteReader())
        {
            while (reader.Read())
            {
                ret.Add
                (
                    new Walk
                        (
                            Int32.Parse(reader["id_user"].ToString()), Int32.Parse(reader["distance"].ToString()),
                            Int32.Parse(reader["start_lat"].ToString()), Int32.Parse(reader["start_long"].ToString()),
                            Int32.Parse(reader["end_lat"].ToString()), Int32.Parse(reader["end_long"].ToString())
                        )
                );
            }
        }

        return ret;
    }
}