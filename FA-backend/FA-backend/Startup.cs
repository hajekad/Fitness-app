using Hajekad.FA_backend.ApplicationLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Hajekad.FA_backend.ApplicationLayer.Services;

namespace HajekAd.FitnessApp.Api
{
    public static class Startup
    {
        private static WebApplicationBuilder builder;
        public static WebApplication InitApp(bool isDevelopment)
        {
            builder = WebApplication.CreateBuilder();
            ConfigureServices();
            
            var app = builder.Build();
            Configure(app, isDevelopment);
            
            return app;
        }
        
        /**
         * @brief
         * This does not work for some a reason that i cant find
         * Should Initialize Services class that is further used in build
         */
        public static void ConfigureServices()
        {
            // add services
            builder.Services.AddSingleton<IPersonService, PersonService>();
            builder.Services.AddMvc();
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
        }
        /**
         * @brief
         * This does not work for some a reason that i cant find
         * Should Apply configuration for the run time environment
         */
        public static void Configure(IApplicationBuilder app, bool isDevelopment)
        {
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseAuthorization();
            
            if(isDevelopment) ///Uses swagger for debugging purposes 
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                });
            }
        }
    }
}
