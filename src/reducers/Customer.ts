
export const initialState = ''

export function CustomerReducer(state = initialState , action: { type: string , payload: string}) {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return action.payload
        default:
            return state
    }
}