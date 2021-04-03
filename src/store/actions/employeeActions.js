import {
    EMPLOYEES_GET_DATA,
    EMPLOYEES_GET_DATA_SUCCESS,
    EMPLOYEES_GET_DATA_ERROR,
    GET_EMPLOYEE_DATA_START, GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_ERROR
} from '../actionTypes'

// actions to get all employees
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


// actions to get data of individual employee
export const getEmpDataId = (id) => ({
    type: GET_EMPLOYEE_DATA_START,
    payload: id
})
export const getEmpDataIdSuccess = (data) => ({
    type: GET_EMPLOYEE_DATA_SUCCESS,
    payload: data
})
export const getEmpDataIdError = (error) => ({
    type: GET_EMPLOYEE_DATA_ERROR,
    payload: error
})