using PetApi.Entities;

namespace PetApi.Repositories;

public interface IPetRepository
{
    Task<Pet?> GetAsync(Guid id);
    Task<IReadOnlyList<Pet>> ListAsync();
    Task<Pet> AddAsync(Pet pet);
    Task<Pet> UpdateAsync(Pet pet);
    Task<bool> DeleteAsync(Guid id);
}