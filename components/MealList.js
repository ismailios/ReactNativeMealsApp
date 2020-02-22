import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = mealItem => {
    const isFav = favoriteMeals.some(meal => meal.id === mealItem.item.id);

    return (
      <MealItem
        title={mealItem.item.title}
        duration={mealItem.item.duration}
        affordability={mealItem.item.affordability}
        complexity={mealItem.item.complexity}
        imageUrl={mealItem.item.imageUrl}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: mealItem.item.id,
              mealTitle: mealItem.item.title,
              isFav: isFav
            }
          })
        }
      />
    );
  };

  return (
    <FlatList
      style={{ width: "100%" }}
      data={props.listData}
      renderItem={renderMealItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
