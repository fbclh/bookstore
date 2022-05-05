import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>
        Check categories
      </button>
    </div>
  );
};

export default Categories;
