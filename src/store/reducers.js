import { ActionTypes } from "./actionTypes"
import produce from "immer"

const initialState = {
    images : [],
    totalPages : 0,
    activePage : 1,
}

const imageReducer = produce((state, action) => {
    console.log("ACTION CALLED", action)
    console.log("CURRENT STATE", state)
    switch (action.type){
        case ActionTypes.FETCH_IMAGES_SUCCESS:
            state.images = action.payload
            break 
        case ActionTypes.CHANGE_IMAGE_ACTIVE_PAGE:
            state.activePage = action.payload
            break
        case ActionTypes.FETCH_TOTAL_PAGES:
            state.totalPages = action.payload
            break
        case ActionTypes.RESET_IMAGE_ACTIVE_PAGE:
            state.activePage = 1
            break
        default:
            break
    }
},initialState)

export default imageReducer