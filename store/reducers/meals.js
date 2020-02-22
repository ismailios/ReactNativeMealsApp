import { MEALS } from "../../data/dummy-data";
import { TOOGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals
        };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (!meal.isGlutenFree && appliedFilters.GlutenFree) {
          return false;
        }
        if (!meal.isVegan && appliedFilters.Vegan) {
          return false;
        }
        if (!meal.isVegetarian && appliedFilters.Vegetarian) {
          return false;
        }
        if (!meal.isLactoseFree && appliedFilters.LactoseFree) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      };

    default:
      return state;
  }
};

export default mealsReducer;
