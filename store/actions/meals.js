export const TOOGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = id => {
  return { type: TOOGLE_FAVORITE, mealId: id };
};

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    filters: filters
  };
};
