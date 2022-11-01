export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic
            break;
        case 'REMOVE_FROM_BASKET':
            //logic
            break;
        default:
            return state;
    }
}

export default reducer;