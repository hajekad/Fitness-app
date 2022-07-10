namespace HajekAd.FitnessApp.Api
{
    class FitnessApp
    {
        private const bool isDevelopment = true;
        
        /**
         * @brief
         * Main functions that initializes and operates this API
         */
        public static void Main()
        {
            var app = Startup.InitApp(isDevelopment);

            app.Run();
        }
    }
}
