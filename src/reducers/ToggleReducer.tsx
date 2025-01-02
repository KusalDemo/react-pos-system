export const visibility = false;

export function ToggleReducer(state = visibility, action: { type: string , payload: boolean}) {
    switch (action.type) {
        case 'TOGGLE':
            return !state
        default:
            return state
    }
}

