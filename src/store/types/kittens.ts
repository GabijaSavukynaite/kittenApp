export const GET_KITTEN_IMAGES_BEGIN = "GET_KITTEN_IMAGES_BEGIN";
export const GET_KITTEN_IMAGES_SUCCESS = "GET_KITTEN_IMAGES_SUCCESS";
export const GET_KITTEN_IMAGES_ERROR = "GET_KITTEN_IMAGES_ERROR";

export interface KittensState {
    images: string[],
    isLoading: boolean,
    error: string
}

export interface GetKittenImagesBeginAction {
    type: typeof GET_KITTEN_IMAGES_BEGIN
}

export interface GetKittenImagesBeginSuccess {
    type: typeof GET_KITTEN_IMAGES_SUCCESS,
    images: string[]
}

export interface GetKittenImagesBeginError {
    type: typeof GET_KITTEN_IMAGES_ERROR
    error: string
}

export type KittensActions = GetKittenImagesBeginAction
    | GetKittenImagesBeginSuccess
    | GetKittenImagesBeginError