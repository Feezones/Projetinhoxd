using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Loja.Models;

namespace Loja.Repositories
{
    public interface IClientesRepositories
    {
        Task<IEnumerable<Clientes>>Get();
        Task<Clientes>Get(int id);
        Task<Clientes> Create(Clientes clientes);
        Task Update(Clientes clientes);
        Task Delete(int id);
    }
}