using DeveloperTest.Models;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        CustomerModel[] GetCustomers();

        CustomerModel CreateCustomer(BaseCustomerModel model);
        
        CustomerModel GetCustomer(int customerId);
    }
}
