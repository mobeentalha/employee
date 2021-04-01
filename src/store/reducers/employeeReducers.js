import {EMPLOYEES_GET_DATA,EMPLOYEES_GET_DATA_ID, EMPLOYEES_GET_DATA_SUCCESS,EMPLOYEES_GET_DATA_ERROR} from '../actionTypes'
const initialState ={
    loading: false,
    data: null,
    error: null,
}
export const empReducer = (state = initialState, action) =>{
    switch(action.type){
        case EMPLOYEES_GET_DATA: 
            return {...state, loading: true, error: null}
        case EMPLOYEES_GET_DATA_ID: 
            return {...state, loading: true, error: null}
        case EMPLOYEES_GET_DATA_SUCCESS:
            return {...state, loading: false, error: null, data: action.payload}
        case EMPLOYEES_GET_DATA_ERROR:
            return {...state, loading: false, error: action.payload, data: null}
        default:
            return {...state}
    }
}