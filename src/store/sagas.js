import axios from "axios"
import {call, takeLatest, put} from "redux-saga/effects"
import { ActionTypes } from "./actionTypes"
import clientId from '../clientId.js'
import { fetchImagesError, fetchImagesSuccess, fetchTotalPages } from "./actions"

function* fetchImages({payload}){
    yield console.log("saga fetch images function called", payload)
    
    const response = yield axios.get(`https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${payload.searchText}&page=${payload.activePage}`)
            .catch(err => {
                put(fetchImagesError(err))
            })
    console.log("response", response.data)
    const details=response.data.results
    yield put(fetchTotalPages(response.data.total_pages))
    yield put(fetchImagesSuccess(details))
}

function* changeActivePageAndShowImages ({payload}){
    yield console.log("saga function to change active page", payload)
}

function* rootSaga(){
    yield takeLatest(ActionTypes.FETCH_IMAGES_REQUEST, fetchImages)
    yield takeLatest(ActionTypes.CHANGE_IMAGE_ACTIVE_PAGE, changeActivePageAndShowImages)
    // yield takeLatest(ActionTypes.FETCH_IMAGES_FAIL, fetchTotalPages)

}

export default rootSaga