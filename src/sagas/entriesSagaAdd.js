import axios from "axios";
import { call, put, takeLatest} from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

 function* addEntryToDb({payload}) {
    console.log('add entry',payload)
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
}
async function addEntry({id, description}) {
    await axios.post('http://localhost:3001/entries',{
        id, 
        description
    })
}

async function addEntryDetails({id, isExpense, value}) {
   await    await axios.post('http://localhost:3001/values',{
    id, 
    isExpense,
    value
})

}