import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategorie = CATEGORIES.find(
    categorie => categorie.id === catId
  );

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  displayedMeal = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeal.length === 0 || !displayedMeal) {
    return (
      <View style={styles.content}>
        <Text>No Meal Found , Check ur Filter</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeal} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategorie = CATEGORIES.find(
    categorie => categorie.id === catId
  );

  return {
    headerTitle: selectedCategorie.title
  };
};
const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default CategoryMealScreen;
