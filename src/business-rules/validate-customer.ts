import validate from 'validate.js';
import { Customer } from '../models/customer/customer';

const customerValidator = (customer: Customer): object => {
    const result = validate(customer,  {
        name: {presence: {allowEmpty: false } },
        email: {presence: {allowEmpty: false }, email: true }}
    );
    return result;
};

export default customerValidator;