using System.Net;
using System.Net.Sockets;
using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.ApplicationLayer.Services.Implementations;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using FitnessApp.InfrastructureLayer.Storage.Implementations;
using FitnessApp.InterfaceLayer.Mapping;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options => {
    options.AddPolicy
        ("AllowMyOrigin",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
        );
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//storage
builder.Services.AddSingleton<IUserStorage, UserStorage>();
builder.Services.AddSingleton<IWalkStorage, WalkStorage>();

//services
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IWalkService, WalkService>();

// mapping
builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();
// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowMyOrigin");

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

string localIP = LocalIPAddress();
app.Urls.Add("http://" + localIP + ":5072");
app.Urls.Add("https://" + localIP + ":4000");

app.Run();

static string LocalIPAddress() {
    using (Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, 0)) {
        socket.Connect("8.8.8.8", 65530);
        IPEndPoint? endPoint = socket.LocalEndPoint as IPEndPoint;
        if (endPoint != null) {
            return endPoint.Address.ToString();
        } else {
            return "127.0.0.1";
        }
    }
}