import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeBook } from '../redux/books/books';

const Book = ({ category, title, author }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = (e) => {
    // console.log('delete book');
    const bookRemoved = {
      id: uuidv4(),
      title,
      author,
    };
    e.preventDefault();
    dispatch(removeBook(bookRemoved));
  };

  return (
    <li className="book-li">
      <div className="book-container">
        <h3>{category}</h3>
        <h4>{title}</h4>
        <p>{author}</p>
        <div>
          <button type="button">Add</button>
          <button type="button" onClick={handleDeleteBook}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
