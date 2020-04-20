import post from './api-post';
import { Customer } from '../models/customer/customer';

const customerService = '/api';

// /** Get Site base Allowance  */     
export const createCustomer = (payload: Customer) => 
    post<{data: string; error: string}>({ url: `${customerService}/CreateCustomer`, method: 'post'}, payload);

export const getCustomerList = (payload: {}) => 
    post<Array<Customer>>({ url: `${customerService}/GetCustomers`}, payload);
      