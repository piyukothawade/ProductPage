const ProductReducer = (state, action) => {

    switch (action.type){
        case "SET_LOADING":
            return {
                ...state, 
                isLOADING: true,
            };
    
        case "SET_API_DATA":
        const featuredData = action.payload.filter((curElem) => {
            return curElem.featured === true;
    
        });
    
        return {
            ...state,
            isLOADING: false,
            products: action.payload,
            featuredProducts: featuredData,
        };
    
        case "API_ERROR":
             return {
                ...state,
                isLOADING: false,
                isERROR: true,
             };
        
             
        case "SET_SINGLE_LOADING":
            return {
                ...state, 
                isSingleLoading: true,
            };
    
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
    
        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading: false,
                isERROR: true,
            };
            
            
    
        default:
            return state;      
    };
    
        
    };
    
    export default ProductReducer;
    