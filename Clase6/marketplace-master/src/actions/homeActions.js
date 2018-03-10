export const filterProducts = filter => ({ type: 'FILTER_PRODUCTS', filter });
export const selectProduct = product => ({type: 'SELECT_PRODUCT', product})
export const setCurrentPage = currentPage => ({ type: 'SET_CURRENT_PAGE', currentPage });