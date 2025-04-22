FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY . ./
RUN dotnet restore

RUN dotnet tool install --global dotnet-ef --version 8.0.0
ENV PATH="$PATH:/root/.dotnet/tools"

RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/ .
COPY --from=build /root/.dotnet/tools /root/.dotnet/tools

ENV PATH="$PATH:/root/.dotnet/tools"
ENTRYPOINT ["dotnet", "backend.dll"]