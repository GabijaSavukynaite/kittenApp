import {
    GET_KITTEN_IMAGES_BEGIN,
    GET_KITTEN_IMAGES_SUCCESS,
    GET_KITTEN_IMAGES_ERROR,
    KittensState,
    KittensActions
} from '../types/kittens';

const initialState: KittensState = { 
    images: [],
    isLoading: false,
    error: ''
}

export const kittensReducer = (state = initialState, action: KittensActions): KittensState => {
    switch (action.type) {
        case GET_KITTEN_IMAGES_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case GET_KITTEN_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images,
                isLoading: false,
                error: ''
            }
        case GET_KITTEN_IMAGES_ERROR:
            return {
                ...state,
                images: [],
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}