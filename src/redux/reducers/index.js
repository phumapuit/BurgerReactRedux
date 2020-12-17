import { combineReducers } from 'redux'

import burgerReducer from './Burger'
const rootReducer = combineReducers({

    burgerReducer,
});

export default rootReducer;