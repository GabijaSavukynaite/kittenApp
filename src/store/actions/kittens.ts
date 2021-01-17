import {
    GET_KITTEN_IMAGES_BEGIN,
    GET_KITTEN_IMAGES_SUCCESS,
    GET_KITTEN_IMAGES_ERROR,
    KittensActions,
} from '../types/kittens';
import { Dispatch } from "redux";
import {
    convertBlobToBase64,
    handleFetchErrors
} from '../../helper';

export const getKittenImages = (imageUrls: string[]) => {
    return (dispatch: Dispatch) => {
        dispatch(getKittenImagesBegin());
        return Promise.all(imageUrls.map(url =>
                fetch(url)
                    .then(handleFetchErrors)
                    .then(response => response.blob())
                    .then(convertBlobToBase64)
                    .then(image => String(image))
            ))
            .then(images => {
                dispatch(getKittenImagesSuccess(images))
            })
            .catch(error => {
                console.log(error);
                dispatch(getKittenImagesError("Error: Unable to load images"))
            });
    }
}

export const getKittenImagesBegin = (): KittensActions  => ({
    type: GET_KITTEN_IMAGES_BEGIN
});

export const getKittenImagesSuccess = (images: string[]): KittensActions => ({
    type: GET_KITTEN_IMAGES_SUCCESS,
    images: images
});
  
export const getKittenImagesError = (error: string): KittensActions => ({
    type: GET_KITTEN_IMAGES_ERROR,
    error: error
});
  
  
