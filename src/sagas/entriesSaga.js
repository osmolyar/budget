import {take, put, call, fork} from 'redux-saga/effects'
import entriesTypes, { populateEntries, populateEntryDetails } from '../actions/entries.actions'
import axios from 'axios'
import types from '../actions/entries.actions'
import {} from '..'

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    console.log('I need to get the entries')
    const {data} = yield call(axios, 'http://localhost:3001/entries')
    console.log(data);
    yield put(populateEntries(data))
}

export function* getEntryDetails(id) {
    const {data} = yield call (axios, `http://localhost:3001/values/${id}`)
    console.log(data);
    yield put(populateEntryDetails(id, data))
    // yield put ({type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: {id,entry:data}})
}
export function* getAllEntriesDetails() {
    const {payload} = yield take(entriesTypes.POPULATE_ENTRIES)
    for (let index=0; index< payload.length; index++) {
        const entry = payload[index]
        yield fork(getEntryDetails, entry.id)
    }
}
