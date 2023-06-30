using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Loja.Context;
using Loja.Models;
using Microsoft.EntityFrameworkCore;

namespace Loja.Repositories
{
    public class ClientesRepositories : IClientesRepositories
    {
        public readonly LojaContext _context;
        public ClientesRepositories(LojaContext context){
            _context = context;
        }

        public async Task<Clientes> Create(Clientes clientes)
        {
            _context.Cliente.Add(clientes);
            await _context.SaveChangesAsync();
            return clientes;
        }

        public async Task Delete(int id)
        {
            var clienteToDelete = await _context.Cliente.FindAsync(id);
            _context.Cliente.Remove(clienteToDelete);
            await _context.SaveChangesAsync();

        }

        public async Task<IEnumerable<Clientes>> Get()
        {
            return await _context.Cliente.ToListAsync();
        }

        public async Task<Clientes> Get(int id)
        {
            return await _context.Cliente.FindAsync(id);
        }

        public async Task Update(Clientes clientes)
        {
            _context.Entry(clientes).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}