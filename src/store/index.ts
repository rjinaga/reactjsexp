import {combineReducers} from 'redux';
import ApplicationState from './application-state';
import customerReducer from './customer-reducer';

export default combineReducers<ApplicationState>({
    customer: customerReducer
});