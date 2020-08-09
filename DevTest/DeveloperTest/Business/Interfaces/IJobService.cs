using DeveloperTest.Models;

namespace DeveloperTest.Business.Interfaces
{
    public interface IJobService
    {
        JobModel[] GetJobs();

        JobModel GetJob(int jobId);

        JobModel CreateJob(BaseJobModel model);
    }
}
