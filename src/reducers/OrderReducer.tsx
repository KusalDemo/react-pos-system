import {Order} from "../model/Order.ts";

export const initialState : Order[] = [];

export function orderReducer(state = initialState, action: {type : string, payload : Order}){
    switch (action.type){
        case "ADD_ORDER":
            return [...state, action.payload]
        case "UPDATE_ORDER":
            return state.map((order) => order.id === action.payload.id ? action.payload : order)
        case "DELETE_ORDER":
            return state.filter((order) => order.id !== action.payload.id)
        default:
            return state
    }
}