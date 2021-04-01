import {combineReducers} from 'redux'
import {empReducer} from './employeeReducers';
export const rootReducer= combineReducers({empReducer})