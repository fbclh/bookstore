/* eslint-disable operator-linebreak */
const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HV9ttPUXmFl8qgpPqdT9/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(URL);
  const bookData = await response.json();
  const books = Object.entries(bookData).map(([key, value]) => ({
    item_id: key,
    title: value[0].title,
    author: value[0].author,
    category: value[0].category,
  }));
  dispatch(getBook(books));
};

export const addBookToAPI = (payload) => async (dispatch) => {
  dispatch(addBook(payload));
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const removeBookFromAPI = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.id)];
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOK: //
      return [...action.payload]; //
    default:
      return state;
  }
};

export default reducer;
