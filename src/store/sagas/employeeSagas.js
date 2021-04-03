import *  as actions from '../actions';
import *  as actionsTypes from '../actionTypes';
import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';
      
function* getEmpDataCall (action){
    const response = yield axios.get('https://dummyapi.io/data/api/user?limit='+action.payload.limit, 
    {
        headers: {'app-id': process.env.REACT_APP_ID}
    });
    if (response){
        yield put(actions.getEmpDataSuccess(response.data))
    }
    else {
        yield put(actions.getEmpDataError({error:'no emp data'}))
    }
}

function* getEmpDataCallId (action){
    const response = yield axios.get('https://dummyapi.io/data/api/user/'+action.payload,
    {
        headers: {'app-id': process.env.REACT_APP_ID}
    });
    if (response){
        yield put(actions.getEmpDataIdSuccess(response.data))
    }
    else {
        yield put(actions.getEmpDataIdError({error:'no data to display'}))
    }
}
export function* getEmpDataSaga () {
    yield takeEvery(actionsTypes.EMPLOYEES_GET_DATA , getEmpDataCall)
}
export function* getEmpDataIdSaga () {
    yield takeEvery(actionsTypes.GET_EMPLOYEE_DATA_START , getEmpDataCallId)
}