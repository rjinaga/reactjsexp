import { Customer } from '../../../models/customer/customer';

/* properties interface */
export interface CustomerListViewProps {
    getCustomers: ({}) => Promise<Customer[] | undefined>;
}
