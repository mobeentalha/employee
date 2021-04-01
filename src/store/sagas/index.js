import { all,fork } from 'redux-saga/effects';
import {getEmpDataSaga} from './employeeSagas';

export function* rootSaga(getState) {
  yield all([
    fork( getEmpDataSaga),
    ]);
}
