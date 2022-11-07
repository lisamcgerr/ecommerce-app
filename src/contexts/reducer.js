export const initialState = {
    basket: [],
    user: null
};

// @TODO remove test initialState
// export const initialState = {
//     basket: [
//         {   id: '12321341',
//             title: 'Manifest Now',
//             price: 19.99,
//             rating: 4,
//             image: 'https://user-images.githubusercontent.com/73184313/127376246-797c1001-b49b-4ec3-ab40-c8ecef78a89e.jpg'
//         },
//         {   id: '49538094',
//             title: 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//             price: 239.0,
//             rating: 4,
//             image: 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
//         }
//     ],
//     user: null
// }

export const getBasketTotal = (basket) => {
    return basket?.reduce((totalAmount, item) =>
        totalAmount + item.price, 0)
}

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
