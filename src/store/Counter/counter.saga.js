import { put, takeLatest } from "redux-saga/effects";

function* incrementSaga() {
  yield put({ type: "INCREMENT" });
}

function* decrementSaga() {
  yield put({ type: "DECREMENT" });
}

export function* counterSagas() {
    yield takeLatest("INCREMENT_SAGA", incrementSaga);
    yield takeLatest("DECREMENT_SAGA", decrementSaga);
}
