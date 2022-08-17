using FitnessApp.ApplicationLayer.Services.Abstractions;
using FitnessApp.ApplicationLayer.Services.Implementations;
using FitnessApp.InfrastructureLayer.Storage.Abstractions;
using FitnessApp.InfrastructureLayer.Storage.Implementations;
using FitnessApp.InterfaceLayer.Mapping;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options=>{
    options.AddPolicy("AllowMyOrigin",
        builder => builder.WithOrigins("*"));
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

app.Run();