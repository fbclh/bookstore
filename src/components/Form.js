import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmitBook = (e) => {
    e.preventDefault();
    if ((title && author) || category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBookToAPI(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
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
