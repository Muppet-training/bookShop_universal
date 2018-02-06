import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import combined reducers
import reducers from './reducers/index';

// Import actions
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// Step 1 create the createStore
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/BooksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';

// REACT-ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './components/menu';
import Footer from './components/footer';

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={BooksList} />
                    <Route path="/admin" component={BooksForm} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
);

render(Routes, document.getElementById('app'));

// Step 2 create and dispatch actions
// Actions are payloads of information that send data from your application to your store.
// store.dispatch(
//     postBooks([
//         {
//             id: 1,
//             title: 'This is the book title',
//             description: 'This is the book description',
//             price: 33.29
//         },
//         {
//             id: 2,
//             title: 'This is the second book title',
//             description: 'This is the second book description',
//             price: 48.92
//         }
//     ])
// );

// // DELETE a book
// store.dispatch(deleteBooks({ id: 1 }));
//
// // UPDATE a book
// store.dispatch(
//     updateBooks({
//         id: 2,
//         title: 'Learn React'
//     })
// );

//-->> Cart Actions <<--
//Add to Cartstore
// store.dispatch(addToCart([{ id: 1 }]));
