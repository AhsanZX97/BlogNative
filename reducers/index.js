import {combineReducers} from 'redux';

import blogReducer from './blogReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    blogsList:blogReducer,
    loadingReducer:loadingReducer
})

export default rootReducer;