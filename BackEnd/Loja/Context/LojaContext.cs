using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Loja.Models;
using Microsoft.EntityFrameworkCore;

namespace Loja.Context
{
    public class LojaContext : DbContext
    {
       public LojaContext(DbContextOptions<LojaContext> options):base(options)
        {
            
        }
        public DbSet<Clientes> Cliente{get;set;}
    }
}