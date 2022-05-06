/* eslint-disable object-curly-newline */
import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';

const Book = ({ category, title, author, id }) => {
  const dispatch = useDispatch();
  const percentage = 70;

  const handleDeleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li className="book-li">
      <div className="book-container">
        <div>
          <h3>{category}</h3>
          <h4 className="book-title">{title}</h4>
          <p className="book-author">{author}</p>
          <button className="btn btn-secondary" type="button">
            Comments
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleDeleteBook}
          >
            Remove
          </button>
          <button className="btn btn-secondary" type="button">
            Edit
          </button>
        </div>

        <div className="bar">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2 className="percent">70%</h2>
            <span className="completed">Completed</span>
          </div>
        </div>

        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-number">Chapter 17</p>
          <button type="button" className="update-btn submit">
            UPDATE PROGRESS
          </button>
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
