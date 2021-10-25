import { combineReducers } from "redux";
import brandReducer from "./brand/brand.reducer";
import FeaturedCollectionReducer from "./featured-collection/featured-collcetion.reducer";


export default combineReducers({
    brandReducer: brandReducer,
    featuredCollectionReducer: FeaturedCollectionReducer 
})