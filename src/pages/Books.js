// import { v4 as uuidv4 } from 'uuid';
import BooksList from '../components/BooksList';
import Form from '../components/Form';

const Books = () => (
  // const books = [
  //   {
  //     id: uuidv4(),
  //     category: 'Action',
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //   },
  //   {
  //     id: uuidv4(),
  //     category: 'Science Fiction',
  //     title: 'Dune',
  //     author: 'Frank Herbert',
  //   },
  //   {
  //     id: uuidv4(),
  //     category: 'Economy',
  //     title: 'Capital in the Twenty-First Century',
  //     author: 'Suzanne Collins',
  //   },
  // ];

  <>
    <div className="books-container">
      {/* <BooksList books={books} /> */}
      <BooksList />
    </div>
    <hr />
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <Form />
    </div>
  </>
);
export default Books;
