using AutoMapper;
using PetApi.DTOs.Requests;
using PetApi.DTOs.Responses;
using PetApi.Entities;
using PetApi.Repositories;

namespace PetApi.Services;

public class PetServices : IPetService
{
    private readonly IPetRepository _repo;
    private readonly IMapper _mapper;

    public PetServices(IPetRepository repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }

    public async Task<PetResponse> CreateAsync(CreatePetRequest request)
    {
        var entity = _mapper.Map<Pet>(request);
        var created = await _repo.AddAsync(entity);
        return _mapper.Map<PetResponse>(created);
    }

    public async Task<PetResponse?> GetAsync(Guid id)
    {
        var pet = await _repo.GetAsync(id);
        return pet is null ? null : _mapper.Map<PetResponse>(pet);
    }

    public async Task<IReadOnlyList<PetResponse>> ListAsync()
    {
        var pets = await _repo.ListAsync();
        return pets.Select(_mapper.Map<PetResponse>).ToList();
    }

    public async Task<PetResponse> UpdateAsync(Guid id, UpdatePetRequest request)
    {
        var pet = await _repo.GetAsync(id) ?? throw new KeyNotFoundException("Pet not found.");
        pet.Name = request.Name;
        var updated = await _repo.UpdateAsync(pet);
        return _mapper.Map<PetResponse>(updated);
    }

    public Task<bool> DeleteAsync(Guid id) => _repo.DeleteAsync(id);
}