import { ActionTypes } from "./actionTypes"

export const fetchImages = (data) => {
    return {
        type: ActionTypes.FETCH_IMAGES_REQUEST,
        payload: data
    }
}
export const fetchImagesSuccess = (images) => {
    return {
        type: ActionTypes.FETCH_IMAGES_SUCCESS,
        payload: images
    }
}

export const fetchImagesError = (error) => {
    return {
        type: ActionTypes.FETCH_IMAGES_FAIL,
        payload: error
    }
}

export const changeImageActivePage = (pageNumber) => {
    return {
        type: ActionTypes.CHANGE_IMAGE_ACTIVE_PAGE,
        payload: pageNumber
    }
}
export const resetImageActivePage = (pageNumber) => {
    return {
        type: ActionTypes.RESET_IMAGE_ACTIVE_PAGE,
        payload: pageNumber
    }
}

export const fetchTotalPages = (totalPages) => {
    return {
        type: ActionTypes.FETCH_TOTAL_PAGES,
        payload: totalPages
    }
}