import {combineReducers} from 'redux';
import ApplicationState from './application-state';
import customer from './customer-reducer';

export default combineReducers<ApplicationState>({
    customer
});