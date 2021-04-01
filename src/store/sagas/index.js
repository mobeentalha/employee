import { all,fork } from 'redux-saga/effects';
import {getEmpDataSaga, getEmpDataIdSaga} from './employeeSagas';

export function* rootSaga(getState) {
  yield all([
    fork( getEmpDataSaga),
    fork( getEmpDataIdSaga)
    ]);
}
