import {createStore} from "redux";
import {CountReducer} from "../reducers/CountReducer.tsx";

export const store = createStore(CountReducer)