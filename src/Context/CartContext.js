import { createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../Reducer/cartReducer"; 


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("beautyCart");
    if (!localCartData == []) {
        return [];

    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    //cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    total_amount: "",
    shipping_fee: 200,

};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCart = (product_id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { product_id, amount, product}});
    };

    const setDecrease = (product_id) => {
        dispatch({ type: "SET_DECREMENT", payload: product_id });
    };

    const setIncrease = (product_id) => {
        dispatch({ type: "SET_INCREMENT", payload: product_id });
    };

    const removeItem = (product_id) => {
        dispatch({ type:"REMOVE_ITEM", payload: product_id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"});
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("beautyCart", JSON.stringify(state.cart));
    }, [state.cart]);


    return (
    <CartContext.Provider value={{...state, AddToCart, removeItem, clearCart, setDecrease, setIncrease}}>
       {children} 
    </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };