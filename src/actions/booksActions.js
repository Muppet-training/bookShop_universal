import axios from 'axios';

//Get a books
export function getBooks() {
    return function(dispatch) {
        axios
            .get('/api/books')
            .then(function(response) {
                dispatch({ type: 'GET_BOOKS', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'GET_BOOKS_REJECTED',
                    payload: 'The interweb couldnt find the books'
                });
            });
    };
}

//Post a book
export function postBooks(book) {
    return function(dispatch) {
        axios
            .post('/api/books', book)
            .then(function(response) {
                dispatch({ type: 'POST_BOOK', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'POST_BOOK_REJECTED',
                    payload: 'There is an error in posting the new book..'
                });
            });
    };
    // return {
    //     type: 'POST_BOOK',
    //     payload: book
    // };
}

//Delete a book
export function deleteBooks(id) {
    return function(dispatch) {
        axios
            .delete('/api/books/' + id)
            .then(function(response) {
                dispatch({ type: 'DELETE_BOOK', payload: id });
            })
            .catch(function(err) {
                dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err });
            });
    };
}

//Update a book
export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    };
}

//Update a book
export function resetButton() {
    return {
        type: 'RESET_BUTTON'
    };
}
