const CHECK_CATEGORIES = 'CHECK_CATEGORIES';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case CHECK_CATEGORIES:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkCategories = () => ({
  type: CHECK_CATEGORIES,
});
