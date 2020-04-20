export const GET_CUSTOMER_INFO = 'customer/GET_CUSTOMER_INFO';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function customer(state: any = {}, action: { type: string; data: any }) {
    switch (action.type) {
        case GET_CUSTOMER_INFO:
            return { ...state, customerInfo: action.data };
        default:
            return state;
    }
}