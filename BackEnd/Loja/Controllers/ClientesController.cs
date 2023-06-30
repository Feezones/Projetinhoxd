using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Loja.Models;
using Loja.Repositories;

namespace Loja.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class ClientesController : ControllerBase
{

    private readonly IClientesRepositories _clientesRepositories;
    public ClientesController(IClientesRepositories clientesRepositories){
        _clientesRepositories = clientesRepositories;
    }
   

    [HttpGet]
    public async Task<IEnumerable<Clientes>> Get(){
        return await _clientesRepositories.Get();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Clientes>> GetById(int id){
        return await _clientesRepositories.Get(id);
    }

    [HttpPost]
    public async Task<ActionResult<Clientes>> Post([FromBody] Clientes clientes){
        var newCliente = _clientesRepositories.Create(clientes);
        return CreatedAtAction(nameof(GetById), new {id = newCliente.Id}, newCliente);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id,[FromBody]Clientes clientes){
        if (id == clientes.Id)
            return BadRequest();

            await _clientesRepositories.Update(clientes);

        return NoContent();    
        
        
    }

    
    [HttpDelete("{id}")]
    public async Task<ActionResult>Delete(int id){
        var clienteDelete = await _clientesRepositories.Get(id);

        if(clienteDelete != null)
            return NotFound();

        await _clientesRepositories.Delete(clienteDelete.Id);
        return NoContent();

        
    }
}
}
