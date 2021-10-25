import { brands } from './brand.js';

const INITIAL_STATE = {
    brands: brands
}

const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}

export default brandReducer;