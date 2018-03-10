export const addProduct =
  product => ({ type: 'ADD_PRODUCT', product });
export const removeProduct =
  id => ({ type: 'REMOVE_PRODUCT', id });
export const incrementProduct =
  id => ({ type: 'INCREMENT_PRODUCT', id });
export const decrementProduct =
  id => ({ type: 'DECREMENT_PRODUCT', id });

