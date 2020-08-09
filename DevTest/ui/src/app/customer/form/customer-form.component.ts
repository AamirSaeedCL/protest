import { Component, OnInit, Type } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerType } from 'src/app/models/customer-type.model';
import { StateService } from 'src/app/services/state';
import { CustomerModelState } from 'src/app/models/customer-state';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  public customerFormGroup: FormGroup;
  public customerTypes: CustomerType[] = [
    { id: 1, name: 'Large' },
    { id: 2, name: 'Small' },
  ];
  constructor(private readonly customerService: CustomerService,
              private readonly stateService: StateService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeCustomerFormGroup();
  }

  get customerFormControls() {
    return this.customerFormGroup.controls;
  }

  public createCustomer(): void {
    this.customerService
      .createCustomer(this.customerFormGroup.value)
      .subscribe((cust: Customer) => {
        this.stateService.message({ [CustomerModelState.NewCustomerCreated]: true });
    });
  }

  private initializeCustomerFormGroup(): void {
    this.customerFormGroup = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      type: [null],
    });
  }
}
