import { CustomerStoreModel } from './store-models/customer-model';
import { Action } from '../types/common';

const defaultData = {} as CustomerStoreModel;

//action creators name
export const GET_CUSTOMER_INFO = 'customer/GET_CUSTOMER_INFO';

export default function customerReducer(state: CustomerStoreModel = defaultData, action: Action) {
    switch (action.type) {
        case GET_CUSTOMER_INFO:
            return { ...state, customerInfo: action.data };
        default:
            return state;
    }
}