import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import CustomerFormView from './customer-form-view';
import { Customer } from '../../../models/customer/customer';
import * as CustomerApi from '../../../services/customer-api';

const onSubmit = async (customer: Customer) => {
    const { error } = await CustomerApi.createCustomer(customer);
    return Promise.resolve(error ? false : true);
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSubmit
    };
};

const CustomerContainer = 
    connect(mapStateToProps, mapDispatchToProps)(CustomerFormView);

export default CustomerContainer;