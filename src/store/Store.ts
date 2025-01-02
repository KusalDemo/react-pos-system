import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducers/Customer.ts";
import {ItemReducer} from "../reducers/Item.ts";

const rootReducer = combineReducers({
    customer:CustomerReducer,
    item:ItemReducer
})

export const store = createStore(rootReducer)