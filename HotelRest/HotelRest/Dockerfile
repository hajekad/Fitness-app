FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["HotelRest/HotelRest.csproj", "HotelRest/"]
RUN dotnet restore "HotelRest/HotelRest.csproj"
COPY . .
WORKDIR "/src/HotelRest"
RUN dotnet build "HotelRest.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HotelRest.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HotelRest.dll"]
