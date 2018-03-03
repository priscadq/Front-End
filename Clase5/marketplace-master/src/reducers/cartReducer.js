export default function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.product);
        case 'REMOVE_PRODUCT':
        // producto donde el id sea distinto a action id
            return state.filter(p => p.id !== action.id);
        case 'INCREMENT_PRODUCT':
            return state.map(p => {
                
                if (p.id  === action.id) {
                    // se trae un objeto nuebo {}, con p, mas la cantidad del producto
                    return Object.assign({}, p, { quantity: p.quantity + 1})
                 } 
                 return p;
                 } );



        case 'DECREMENT_PRODUCT':
        return state.map(p => {
                
            if (p.id  === action.id) {
                // se trae un objeto nuebo {}, con p, mas cantidad del producto
                return Object.assign({}, p, { quantity: p.quantity - 1})
             } 
             return p;
             } );


        default:
        return state;

    }
}
