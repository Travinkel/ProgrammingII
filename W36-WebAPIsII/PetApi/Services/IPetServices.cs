using PetApi.DTOs.Requests;
using PetApi.DTOs.Responses;

namespace PetApi.Services;

public interface IPetService
{
    Task<PetResponse> CreateAsync(CreatePetRequest request);
    Task<PetResponse?> GetAsync(Guid id);
    Task<IReadOnlyList<PetResponse>> ListAsync();
    Task<PetResponse> UpdateAsync(Guid id, UpdatePetRequest request);
    Task<bool> DeleteAsync(Guid id);
}