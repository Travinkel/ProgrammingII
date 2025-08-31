using System.ComponentModel.DataAnnotations;

namespace PetApi.DTOs.Responses;

public class PetResponse
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Name { get; set; } = default!;
}