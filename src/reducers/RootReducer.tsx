import { itemReducer, initialState as itemInitialState } from './ItemReducer.tsx';
import { customerReducer, initialState as customerInitialState } from './CustomerReducer.tsx';
import { orderReducer, initialState as orderInitialState } from './OrderReducer.tsx';

export const initialState = {
    item: itemInitialState,
    customer: customerInitialState,
    order: orderInitialState,
};

export function rootReducer(state = initialState, action: any) {
    return {
        item: itemReducer(state.item, action),
        customer: customerReducer(state.customer, action),
        order: orderReducer(state.order, action),
    };
}
