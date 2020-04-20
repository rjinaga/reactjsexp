/* eslint-disable @typescript-eslint/no-explicit-any */
import {connect} from 'react-redux';
import CustomerFormView from './customer-form-view';
import { Customer } from '../../../models/customer/customer';
import * as CustomerApi from '../../../services/customer-api';
import ApplicationState from '../../../store/application-state';
import { GET_CUSTOMER_INFO } from '../../../store/customer-reducer';
import { Dispatch } from '../../../types/common';


const onSubmit = async (customer: Customer) => {
    const { error } = await CustomerApi.createCustomer(customer);
    return Promise.resolve(error ? false : true);
};

const editCustomer = (name: string) => {
    return async (dispatch: Dispatch) => {
        /** TODO: need to change this api to getSpecific customer 
         *  Used temporarily for testing
        */
        const {data} = await CustomerApi.getCustomerList({});
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

// The connect() function connects a React component to a Redux store.
const CustomerContainer = 
    connect(mapStateToProps, mapDispatchToProps)(CustomerFormView);

export default CustomerContainer;