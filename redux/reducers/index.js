import { combineReducers } from "redux";
import taskStore from "./task.reducer";
import layoutStore from './layout.reducer';

const rootReducer = combineReducers({
    taskStore,
    layoutStore
});

export default rootReducer;