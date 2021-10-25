import { collections } from "./collections";

const INITIAL_STATE = {
    featured_collection: collections
};

const FeaturedCollectionReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default FeaturedCollectionReducer;