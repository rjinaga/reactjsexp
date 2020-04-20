import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import CustomerListView from './customer-list-view';
import * as CustomerApi from '../../../services/customer-api';

const getCustomers = async () => {
    const {data} = await CustomerApi.getCustomerList({});
    return data;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getCustomers
    };
};

const CustomerListContainer = 
    connect(null, mapDispatchToProps)(CustomerListView);

export default CustomerListContainer;