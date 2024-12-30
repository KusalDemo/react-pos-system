import {Customer} from "../model/Customer.ts";

export const initialState : Customer[] = [];

export function customerReducer(state = initialState, action: {type : string, payload : Customer}){
    switch (action.type){
        case "ADD_CUSTOMER":
            return [...state, action.payload]
        case "UPDATE_CUSTOMER":
            return state.map((customer) => customer.email === action.payload.email ? action.payload : customer)
        case "DELETE_CUSTOMER":
            return state.filter((customer) => customer.email !== action.payload.email)
        default:
            return state
    }
}