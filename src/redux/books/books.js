import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    case ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
