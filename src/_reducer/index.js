import { authReducer } from './authReducer';
import { miscReducer } from './miscReducer';
import { categoryReducer } from './categoryreducer';
import { optionsReducer } from './optionReducer';
import { productReducer } from './productReducer';
import { itemReducer } from './itemReducer';
import { adressReducer } from './addressReducer';
import { ordersReducer } from './orderReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    misc: miscReducer,
    category: categoryReducer,
    options: optionsReducer,
    product: productReducer,
    items: itemReducer,
    addresses: adressReducer,
    order:ordersReducer
});

export default rootReducer;
