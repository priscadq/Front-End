export default function productReducer(state = [], action) {
    switch (action.type) {
      case 'FILTER_PRODUCTS':
        return state.filter(p => p.title.trim().toLowerCase().includes(action.filter.trim().toLowerCase()));
      default:
        return state;
    }



  }