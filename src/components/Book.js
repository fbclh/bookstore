import { PropTypes } from 'prop-types';

const Book = ({ category, title, author }) => (
  <li className="book-li">
    <div className="book-container">
      <h3>{category}</h3>
      <h4>{title}</h4>
      <p>{author}</p>
      <div>
        <button type="button">Add</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  </li>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
