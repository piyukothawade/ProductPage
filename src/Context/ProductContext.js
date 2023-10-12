import axios from "axios";
import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../Reducer/productReducer";
const AppContext = createContext();

//const API = "https://localhost:7270/api/Product";
//const API = "https://localhost:44320/api/Product";
//const API = "http://localhost:5000/api/products";
const API = "https://restapi-production-acb3.up.railway.app/api/products";

const initialState = {
    isLOADING: false,
    isERROR: false,
    products: [],
    featuredProducts : [],
    isSingleLoading: false,
    singleProduct: {},
};
const AppProvider = ({ children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products});
        } catch (error) {
            dispatch({ type: "API_ERROR" });         
        }  
    };
   // my second api call for single product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        }catch(error){
            dispatch({ type: "SET_SINGLE_ERROR"})
        }
    };
    useEffect(() => {
        getProducts(API);

    }, [])
    return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>
        {children}
        </AppContext.Provider>
    );
};
const useProductContext = () => {
    return useContext(AppContext);
};
export {AppProvider, AppContext, useProductContext };