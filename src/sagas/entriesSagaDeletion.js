import axios from "axios";
import { take, call, put} from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'

export function* deleteEntrySaga() {
    while(true) {
        const {payload} = yield take(entriesTypes.REMOVE_ENTRY)
        yield call(deleteEntry, payload.id)
        yield put({type: entriesTypes.REMOVE_ENTRY_RESULT, payload: {id: payload.id}})
    }

}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`)
    await axios.delete(`http://localhost:3001/values/${id}`)
}