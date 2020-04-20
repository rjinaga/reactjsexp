import { Customer } from '../../../models/customer/customer';

/* properties interface */
export interface CustomerFormViewProps {
    onSubmit: (customer: Customer) => Promise<boolean>;
}
