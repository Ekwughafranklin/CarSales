
#FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
#WORKDIR /app
#EXPOSE 80
#EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
EXPOSE 80

#copy all .csprojfiles and restore as distinct layers
#

COPY CarSales.sln CarSales.sln
COPY Src/AuctionService/AuctionService.csproj Src/AuctionService/AuctionService.csproj
COPY Src/SearchService/SearchService.csproj Src/SearchService/SearchService.csproj
COPY Src/GatewayService/GatewayService.csproj Src/GatewayService/GatewayService.csproj
COPY Src/Contracts/Contracts.csproj Src/Contracts/Contracts.csproj
COPY Src/IdentityService/IdentityService.csproj Src/IdentityService/IdentityService.csproj


##restore package deps
RUN dotnet restore CarSales.sln

##copy app folder over
COPY Src/GatewayService Src/GatewayService

WORKDIR /app/Src/GatewayService
RUN dotnet publish -c Release -o /app/src/out

##uild runtime image

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT ["dotnet", "GatewayService.dll"]
