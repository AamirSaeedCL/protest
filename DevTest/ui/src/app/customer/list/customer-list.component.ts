import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Observable, Subject } from 'rxjs';
import { StateService } from 'src/app/services/state';
import { CustomerModelState } from 'src/app/models/customer-state';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})

export class CustomerListComponent implements OnInit, OnDestroy  {
  public customer$: Observable<Customer[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private readonly customerService: CustomerService,
              private readonly stateService: StateService) {}

  ngOnInit(): void {
    this.setupSubscribions();
  }

  private setupSubscribions(): void {
    this.customer$  = this.customerService.getCustomers();
     // Listen for state change signal and fetch the customer data again.
    this.stateService
    .subscription()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((state) => {
      if (!!state[CustomerModelState.NewCustomerCreated]) {
          this.customer$  = this.customerService.getCustomers();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
