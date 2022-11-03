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
            var updatedBasket = [ ...state.basket ];
            var index = state.basket.findIndex(item => item.id === action.payload)
            index > -1 ? updatedBasket.splice(index, 1) : console.warn(`Cannot remove product(id: ${action.payload}) as it is NOT in the basket`);
            return {
                ...state,
                basket: updatedBasket
            }
        default:
            return state;
    }
}

export default reducer;
