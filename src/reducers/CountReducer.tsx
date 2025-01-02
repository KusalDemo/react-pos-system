export const initialState ={
    count: 0,
    visibility: false
}

export function CountReducer(state = initialState, action: { type: string , payload: number}) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'TOGGLE':
            return {...state, visibility: !state.visibility}
        default:
            return state
    }
}