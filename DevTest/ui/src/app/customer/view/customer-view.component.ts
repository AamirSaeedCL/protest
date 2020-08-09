import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})

export class CustomerViewComponent implements OnInit, OnDestroy {
  public customer: Customer;
  private customerId: number;
  private unsubscribe$ = new Subject<void>();
  constructor(
    private readonly route: ActivatedRoute,
    private readonly customerService: CustomerService
  ) {
    this.customerId = route.snapshot.params.id;
  }

   ngOnInit() {
    this.customerService
      .getCustomer(this.customerId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((customer) => (this.customer = customer));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
