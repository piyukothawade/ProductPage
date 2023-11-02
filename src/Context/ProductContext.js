import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/productReducer";
import ProductData from "../components/ProductData";

const AppContext = createContext();

// Import your ProductData here



const initialState = {
  isLOADING: false,
  isERROR: false,
  products: ProductData, // Initialize products with ProductData
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
