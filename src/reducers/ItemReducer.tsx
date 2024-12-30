import {Item} from "../model/Item.ts";

export const initialState : Item[] = [];

export function itemReducer(state = initialState, action:{type:string , payload : Item}){
    switch (action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
        case "UPDATE_ITEM":
            return state.map((item) => item.id === action.payload.id ? action.payload : item)
        case "DELETE_ITEM":
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state
    }
}