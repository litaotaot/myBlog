import { combineReducers } from "redux";

import recordReducer from './recordReducer'
import blogReducer from './blogReducer'

const rootReducer = combineReducers({
    recordReducer,
    blogReducer,
})

export default rootReducer