import {connect} from 'react-redux';
import CustomerFormView from './customer-form-view';
import { Customer } from '../../../models/customer/customer';
import * as CustomerApi from '../../../services/customer-api';
import ApplicationState from '../../../store/application-state';
import { GET_CUSTOMER_INFO } from '../../../store/customer-reducer';

type Dispatch = (action: any) => void;

const onSubmit = async (customer: Customer) => {
    const { error } = await CustomerApi.createCustomer(customer);
    return Promise.resolve(error ? false : true);
};

const editCustomer = (name: string) => {
    return async (dispatch: Dispatch) => {
        let {data} = await CustomerApi.getCustomerList({});
        if (data) {
            dispatch({type: GET_CUSTOMER_INFO, data: data[0]});
        }
    };
};

const clearStore = () => {
    return (dispatch: Dispatch) => {
        dispatch({type: GET_CUSTOMER_INFO});
    };
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        customerInfo: state.customer.customerInfo
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSubmit,
        clearStore: () => dispatch(clearStore()),
        editCustomer: (name: string) => dispatch(editCustomer(name))
    };
};

const CustomerContainer = 
    connect(mapStateToProps, mapDispatchToProps)(CustomerFormView);

export default CustomerContainer;