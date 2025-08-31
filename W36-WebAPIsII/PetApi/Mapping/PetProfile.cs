using AutoMapper;
using PetApi.Entities;
using PetApi.DTOs.Requests;
using PetApi.DTOs.Responses;

namespace PetApi.Mapping;

public class PetProfile : Profile
{
    public PetProfile()
    {
        CreateMap<CreatePetRequest, Pet>();
        CreateMap<UpdatePetRequest, Pet>();
        CreateMap<Pet, PetResponse>();
    }
}