import { CustomerType } from './customer-type.enum';

export interface Customer {
  customerId: number;
  name: string;
  type: CustomerType;
}
