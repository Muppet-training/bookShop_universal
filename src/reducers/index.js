import { combineReducers } from 'redux';

// We import reducers to be combined
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// Combine the Reducers
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
});
