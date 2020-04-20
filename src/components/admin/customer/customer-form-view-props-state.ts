import { Customer } from '../../../models/customer/customer';

/* properties interface */
export interface CustomerFormViewProps {
    customerInfo: Customer;
    match?: {params: {name: string}};

    clearStore: () => void;
    editCustomer: (name: string) => void;
    onSubmit: (customer: Customer) => Promise<boolean>;
}

export interface CustomerFormViewState extends Customer {
    isEdit: boolean;
}
