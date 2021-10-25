import { combineReducers } from "redux";
import brandReducer from "./brand/brand.reducer";


export default combineReducers({
    brandReducer: brandReducer
})