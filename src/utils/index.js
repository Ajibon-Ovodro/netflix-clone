export const bookMarkClass = (state, id) => {
  const found = state.length > 0 && state.some((el) => el.id === id);

  return found ? "fas fa-heart bookmark checked" : "fas fa-heart bookmark";
};

export const addOrRemoveWishList = (data, state, dispatch) => {
  const found = state.length > 0 && state.some((el) => el.id === data.id);
  if (found) {
    dispatch({ type: "REMOVE_WISHLIST", payload: data });
  } else {
    dispatch({ type: "ADD_WISHLIST", payload: data });
  }
};

export const getTitle = (data) => {
  if (data.original_name) {
    return data.original_name;
  } else if (data.original_title) {
    return data.original_title;
  } else {
    return data.title;
  }
};

export const getDate = (data) => {
  if (data.release_date) {
    return data.release_date.split("-")[0];
  } else {
    return data.first_air_date.split("-")[0];
  }
};

export const fetchSingleData = async (data, apiFn, setInfo, toggle) => {
    let title = getTitle(data);
    let date = getDate(data);
    const res = await apiFn(title, date);
    if (res.status === 200 && !res.data.Error) {
      setInfo(res.data);
      toggle();
    }
  };