import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  const handleDeleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <li className="book-li" id={id}>
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
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  category: '',
};

export default Book;
