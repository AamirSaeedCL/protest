using AutoMapper;
using DeveloperTest.Database.Models;

namespace DeveloperTest.Models.Mappings
{

    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<BaseCustomerModel,Customer>();
            CreateMap<Customer, CustomerModel>();

            CreateMap<BaseJobModel, JobModel>();
            CreateMap<Job, JobModel>();
        }
    }

}
