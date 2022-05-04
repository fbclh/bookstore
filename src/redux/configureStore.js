import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import books, { fetchBooks } from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchBooks());
export default store;
