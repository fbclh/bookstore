import BooksList from '../components/BooksList';
import Form from '../components/Form';

const Books = () => (
  <>
    <div className="books-container">
      <BooksList />
    </div>
    <hr />
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <Form />
    </div>
  </>
);
export default Books;
