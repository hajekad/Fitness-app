FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["FA-backend/FA-backend.csproj", "FA-backend/"]
RUN dotnet restore "FA-backend/FA-backend.csproj"
COPY . .
WORKDIR "/src/FA-backend"
RUN dotnet build "FA-backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FA-backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FA-backend.dll"]
