import { ADD_TO_CART, INCREASE_QUANTITY, REDUCE_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    };
};

export const reduceQuantity = (product) => {
    return {
        type: REDUCE_QUANTITY,
        payload: product,
    }
}

export const increaseQuantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product,
    }
}