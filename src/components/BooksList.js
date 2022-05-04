import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <ul>
      {books.map((book) => (
        <Book
          category={book.category}
          title={book.title}
          author={book.author}
          key={book.item_id}
          id={book.item_id}
        />
      ))}
    </ul>
  );
};

export default BooksList;
