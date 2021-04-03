import {
		EMPLOYEES_GET_DATA,
		EMPLOYEES_GET_DATA_SUCCESS,
		EMPLOYEES_GET_DATA_ERROR,
		GET_EMPLOYEE_DATA_START, GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_ERROR
} from '../actionTypes'

const initialState = {
		loading: false,
		data: null,
		error: null,
		empData: null,
		empDataError: null
}
export const empReducer = (state = initialState, action) => {
		switch (action.type) {
				case EMPLOYEES_GET_DATA:
						return {...state, loading: true, error: null}
				case EMPLOYEES_GET_DATA_SUCCESS:
						return {...state, loading: false, error: null, data: action.payload}
				case EMPLOYEES_GET_DATA_ERROR:
						return {...state, loading: false, error: action.payload, data: null}
				case GET_EMPLOYEE_DATA_START:
						return {...state, loading: true, empDataError: null}
				case GET_EMPLOYEE_DATA_SUCCESS:
						return {...state, loading: false, error: null, empData: action.payload}
				case GET_EMPLOYEE_DATA_ERROR:
						return {...state, loading: false, empDataError: action.payload,empData:null}
				default:
						return {...state}
		}
}