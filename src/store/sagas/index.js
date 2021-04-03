import { all } from 'redux-saga/effects';
import {getEmpDataSaga, getEmpDataIdSaga} from './employeeSagas';

export function* rootSaga(getState) {
  yield all([
     getEmpDataSaga(),
     getEmpDataIdSaga()
    ]);
}
