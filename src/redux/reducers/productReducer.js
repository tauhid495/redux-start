import { ADD_TO_CART, INCREASE_QUANTITY, REDUCE_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/actionTypes";


const initialState = {
    cart: [],
};
const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find((product) => product._id === action.payload._id);

    console.log(selectedProduct);

    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(
                    (product) => product._id !== selectedProduct._id
                );
                selectedProduct.quantity = selectedProduct.quantity + 1;

                return {
                    ...state,
                    cart: [...newCart, selectedProduct],
                };
            };
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
        case REMOVE_FROM_CART:

            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.payload._id)
            };

        case REDUCE_QUANTITY:
            if (selectedProduct.quantity >= 1) {
                const newCart = state.cart.filter(
                    (product) => product._id !== selectedProduct._id
                );
                selectedProduct.quantity = selectedProduct.quantity - 1;

                return {
                    ...state,
                    cart: [...newCart, selectedProduct],
                };
            } else {
                return;
            };

            case INCREASE_QUANTITY:
            if (selectedProduct.quantity>=0) {
                const newCart = state.cart.filter(
                    (product) => product._id !== selectedProduct._id
                );
                selectedProduct.quantity = selectedProduct.quantity + 1;

                return {
                    ...state,
                    cart: [...newCart, selectedProduct],
                };
            } else {
                return;
            };

        default:
            return state;

    }
};

export default productReducer;