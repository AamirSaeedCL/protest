using System.Linq;
using AutoMapper;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;

namespace DeveloperTest.Business
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public CustomerService(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public CustomerModel[] GetCustomers()
        {
            return context.Customers.Select(x => mapper.Map<CustomerModel>(x)
            ).ToArray();
        }

        public CustomerModel GetCustomer(int customerId)
        {
            return context.Customers.Where(x => x.CustomerId == customerId).Select(x => mapper.Map<CustomerModel>(x)
            ).SingleOrDefault();
        }

        public CustomerModel CreateCustomer(BaseCustomerModel model)
        {
            var addedCustomer = context.Customers.Add(mapper.Map<Customer>(model));

            context.SaveChanges();

            return mapper.Map<CustomerModel>(addedCustomer.Entity);
        }
    }

}
