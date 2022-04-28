const Form = () => (
  <>
    <div className="form">
      <input className="title" type="text" placeholder="Book Title" />
      <input className="author" type="text" placeholder="Book Author" />
      <button type="button" className="btn btn-primary">
        ADD BOOK
      </button>
    </div>
  </>
);

export default Form;
