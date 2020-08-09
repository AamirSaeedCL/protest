import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})

export class CustomerService {
  baseUrl = 'http://localhost:63235';
  entityName = 'customer';
  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${this.baseUrl}`;
  }

  public getCustomers(): Observable<Customer[]> {
    const endpoint = `${this.baseUrl}/${this.entityName}`;
    return this.httpClient.get<Customer[]>(
      endpoint
    );
  }

  public getCustomer(customerId: number): Observable<Customer> {
    const endpoint = `${this.baseUrl}/${this.entityName}/${customerId}`;
    return this.httpClient.get<Customer>(
      endpoint
    );
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    const endpoint = `${this.baseUrl}/${this.entityName}`;
    return this.httpClient.post<Customer>(
      endpoint, customer
    );
  }
}
