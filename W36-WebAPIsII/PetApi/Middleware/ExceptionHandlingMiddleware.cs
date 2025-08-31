using System.Net;
using System.Text.Json;

namespace PetApi.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    public ExceptionHandlingMiddleware(RequestDelegate next) => _next = next;

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (KeyNotFoundException ex)
        {
            await WriteProblem(context, (int)HttpStatusCode.NotFound, "Not Found", ex.Message);
        }
        catch (InvalidOperationException ex)
        {
            await WriteProblem(context, (int)HttpStatusCode.Conflict, "Conflict", ex.Message);
        }
        catch (Exception ex)
        {
            await WriteProblem(context, (int)HttpStatusCode.InternalServerError, "Server Error", ex.Message);
        }
    }

    private static Task WriteProblem(HttpContext ctx, int status, string title, string detail)
    {
        ctx.Response.ContentType = "application/problem+json";
        ctx.Response.StatusCode = status;

        var payload = new
        {
            type = "about:blank",
            title,
            status,
            detail,
            traceId = ctx.TraceIdentifier
        };

        return ctx.Response.WriteAsync(JsonSerializer.Serialize(payload));
    }
}