const getProducts = () => {
  const items = [];
  const words = ['Monitor', 'Zapatillas', 'iPhone X', 'Pixel 2', 'Smart TV Sony 40', 'Proyector EPSON', 'Impresora Laser HP', 'Renault 12', 'Billetera', 'Cartera'];

  for (let i = 1; i <= 10; i++) {
    items.push(
      {
        id: i,
        imageUrl: 'http://placehold.it/700x400',
        title: words[i - 1],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
        price: i * 100,
      }
    );
  }

  return items;
};

const initialState = {
  allProducts: getProducts(),
  currentPage: 1,
  filteredProducts: getProducts(),
  itemsPerPage: 6,
  selectProduct: null
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        filteredProducts: !action.filter ? state.allProducts : state.allProducts.filter(p => p.title.trim().toLowerCase().includes(action.filter.trim().toLowerCase()))
      };
    case 'SELECT_PRODUCT': 
    return {
      ...state,
      selectProduct: action.product
    };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
}