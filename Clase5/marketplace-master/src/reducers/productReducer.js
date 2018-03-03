
// getproducts traido desde apps
const getProducts = () => {
  const items = [];
  const words = ['Monitor', 'Zapatillas', 'iPhone X', 'Pixel 2', 'Smart TV Sony 40', 'Proyector EPSON', 'Impresora Laser HP', 'Renault 12', 'Billetera', 'Cartera'];

  for (let i = 1; i <= 10; i++) {
    items.push(
      {
        id: i,
        imageUrl: 'http://placehold.it/700x400',
        title: words[i - 1],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
      }
    );
  }

  return items;
};

const initialState = {
  products: getProducts(),
  filtredProducts: getProducts(),
};

//window.products = getProducts();


//filteredProducts: this.state.products.filter(p => p.title.trim().toLowerCase().includes(filter.trim().toLowerCase()))
export default function productReducer(state = initialState, action) {
  
    switch (action.type) {
      case 'FILTER_PRODUCTS':
        return Object.assign ({}, 
          {...state, 
          filtredProducts: state.filter(p => p.title.trim().toLowerCase().includes(action.filter.trim().toLowerCase()))
        });
      default:
        return state;
    }



  }