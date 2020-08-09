import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  public GetJobs(): Observable<JobModel[]> {
    return this.httpClient.get<JobModel[]>('http://localhost:63235/job');
  }

  public GetJob(jobId: number): Observable<JobModel> {
    return this.httpClient.get<JobModel>(`http://localhost:63235/job/${jobId}`);
  }

  public CreateJob(job: JobModel): Promise<object> {
    return this.httpClient.post('http://localhost:63235/job', job).toPromise();
  }
}
