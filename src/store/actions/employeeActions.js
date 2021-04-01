import {EMPLOYEES_GET_DATA, EMPLOYEES_GET_DATA_SUCCESS,EMPLOYEES_GET_DATA_ERROR} from '../actionTypes'
export const getEmpData = (filter, offset, limit) => ({
    type: EMPLOYEES_GET_DATA,
    payload: { filter, offset, limit }
})

export const getEmpDataSuccess = data => ({
    type: EMPLOYEES_GET_DATA_SUCCESS,
    payload: data
});
export const getEmpDataError = error => ({
    type: EMPLOYEES_GET_DATA_ERROR,
    payload: error
});