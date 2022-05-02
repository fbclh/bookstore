<<<<<<< Updated upstream
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
=======
import { shallowEqual, useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books, shallowEqual);
>>>>>>> Stashed changes

  return (
    <ul>
      {books.map((book) => (
        <Book
          category={book.category}
          title={book.title}
          author={book.author}
<<<<<<< Updated upstream
          key={book.id}
=======
          key={book.key}
          id={book.id}
>>>>>>> Stashed changes
        />
      ))}
    </ul>
  );
};

export default BooksList;
