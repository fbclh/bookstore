import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul>
      {books.map((book) => (
        <Book
          category={book.category}
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
        />
      ))}
    </ul>
  );
};

export default BooksList;
