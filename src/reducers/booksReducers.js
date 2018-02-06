// Books Reducers
export function booksReducers(
    state = {
        books: []
    },
    action
) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, books: [...action.payload] };
            break;

        case 'POST_BOOK':
            // let books = state.books.concat(action.payload);
            return {
                ...state,
                books: [...state.books, ...action.payload],
                msg: 'Saved! Click to continue',
                style: 'success',
                validation: 'success'
            };
            break;

        case 'POST_BOOK_REJECTED':
            // let books = state.books.concat(action.payload);
            return {
                ...state,
                msg: 'Please try again',
                style: 'danger',
                validation: 'error'
            };
            break;

        case 'RESET_BUTTON':
            return { ...state, msg: null, style: 'primary', validation: null };
            break;

        case 'DELETE_BOOK':
            // Create a copy of the current array
            const currentBookToDelete = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(function(book) {
                return book._id == action.payload;
            });
            // Use slice to remove the book at the specified index
            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            };
            break;
        case 'UPDATE_BOOK':
            // Create a cope of the current array of books
            const currentBookToUpdate = [...state.books];
            // Determin at which index in books array is the book to updated
            const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
                return book._id === action.payload._id;
            });
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methods too
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            // THis log has the purpose to show you how newBookToUpdate looks like
            console.log('What is the newBookToUpdate: ', newBookToUpdate);
            // Use slice to remove the book at the specified index, replace with the new object and concatenate with the rest of the items in the array
            return {
                books: [
                    ...currentBookToUpdate.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookToUpdate.slice(indexToUpdate + 1)
                ]
            };
            break;
    }
    return state;
}
