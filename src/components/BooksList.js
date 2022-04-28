import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book
        title={book.title}
        author={book.author}
        key={book.id}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.string.isRequired,
};

export default BooksList;
