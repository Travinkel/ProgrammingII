using PetApi.Mapping;
using PetApi.Middleware;
using PetApi.Repositories;
using PetApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// AutoMapper
builder.Services.AddAutoMapper(typeof(PetProfile));

// Dependency Injection
builder.Services.AddSingleton<IPetRepository, InMemoryPetRepository>();
builder.Services.AddScoped<IPetService, PetServices>();

var app = builder.Build();

// Global exception handling
app.UseMiddleware<ExceptionHandlingMiddleware>();

// Swagger in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();