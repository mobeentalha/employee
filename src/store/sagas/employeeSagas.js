import *  as actions from '../actions';
import *  as actionsTypes from '../actionTypes';
import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';
      
function* getEmpDataCall (action){

    console.log({action});
    // yield put(actions.getEmpDataSuccess('response.data'))
    const response = yield axios.get('https://dummyapi.io/data/api/user?limit='+action.payload.limit, 
    {
        headers: {'app-id': process.env.REACT_APP_ID}
    });
    if (response){
        console.log('api res ', response)
        yield put(actions.getEmpDataSuccess(response.data))
    }
    else {
        yield put(actions.getEmpDataError(response.data))
    }
}
export function* getEmpDataSaga () {
    yield takeEvery(actionsTypes.EMPLOYEES_GET_DATA , getEmpDataCall)
}