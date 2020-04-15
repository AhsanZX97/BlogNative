import {combineReducers} from 'redux';

import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    blogsList:blogReducer
})

export default rootReducer;