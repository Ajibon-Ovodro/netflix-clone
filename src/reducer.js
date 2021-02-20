export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_WISHLIST":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "REMOVE_WISHLIST":
      let prev_data = state.favorite;
      let new_arr = prev_data.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        favorite: new_arr,
      };
    default:
      return state;
  }
}
