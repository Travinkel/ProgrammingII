using System.Collections.Concurrent;
using PetApi.Entities;

namespace PetApi.Repositories;

public class InMemoryPetRepository : IPetRepository
{
    private readonly ConcurrentDictionary<Guid, Pet> _store = new();

    public Task<Pet?> GetAsync(Guid id) =>
        Task.FromResult(_store.TryGetValue(id, out var pet) ? pet : null);

    public Task<IReadOnlyList<Pet>> ListAsync() =>
        Task.FromResult((IReadOnlyList<Pet>)_store.Values.OrderBy(p => p.CreatedAt).ToList());

    public Task<Pet> AddAsync(Pet pet)
    {
        pet.Id = Guid.NewGuid();
        pet.CreatedAt = DateTime.UtcNow;
        _store.TryAdd(pet.Id, pet);
        return Task.FromResult(pet);
    }

    public Task<Pet> UpdateAsync(Pet pet)
    {
        if (!_store.ContainsKey(pet.Id))
            throw new KeyNotFoundException("Pet not found.");
        _store[pet.Id] = pet;
        return Task.FromResult(pet);
    }
    
    public Task<bool> DeleteAsync(Guid id) =>
        Task.FromResult(_store.TryRemove(id, out _));
}