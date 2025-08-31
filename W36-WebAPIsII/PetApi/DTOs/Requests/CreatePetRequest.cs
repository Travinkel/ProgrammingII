using System.ComponentModel.DataAnnotations;

namespace PetApi.DTOs.Requests;

public class CreatePetRequest
{
    [Required]
    [StringLength(60, MinimumLength = 2, ErrorMessage = "Name must be between 2-60 characters.")]
    public string Name { get; set; } = default!;
}