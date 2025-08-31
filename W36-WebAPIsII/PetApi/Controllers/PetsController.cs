using Microsoft.AspNetCore.Mvc;
using PetApi.DTOs.Requests;
using PetApi.Services;

namespace PetApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PetsController : ControllerBase
{
    private readonly IPetService _service;
    public PetsController(IPetService service) => _service = service;
    
    [HttpGet]
    public async Task<ActionResult> List() 
        => Ok(await _service.ListAsync());

    [HttpGet("{id:guid}")]
    public async Task<ActionResult> Get(Guid id)
    {
        var pet = await _service.GetAsync(id);
        return pet is null ? NotFound() : Ok(pet);
    }

    [HttpPost]
    public async Task<ActionResult> Create([FromBody] CreatePetRequest request)
    {
        // [ApiController] auto-validates ModelState from DataAnnotions
        var created = await _service.CreateAsync(request);
        return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
    }
    
    [HttpPut("{id:guid}")]
    public async Task<ActionResult> Update(Guid id, [FromBody] UpdatePetRequest request)
        => Ok(await _service.UpdateAsync(id, request));

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> Delete(Guid id)
        => await _service.DeleteAsync(id) ? NoContent() : NotFound();
}