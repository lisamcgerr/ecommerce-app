export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    // @TODO remove console.log
    console.log(action, state);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [ ...state.basket, action.payload ]
            };
        case 'REMOVE_FROM_BASKET':
            //logic
            return { state };
        default:
            return state;
    }
}

export default reducer;
