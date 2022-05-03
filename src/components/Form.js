import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmitBook}>
        <input
          className="title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          ADD BOOK
        </button>
      </form>
    </>
  );
};

export default Form;
