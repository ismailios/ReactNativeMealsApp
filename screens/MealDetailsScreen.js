import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButtons from "../components/headerButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealItem from "../components/MealItem";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");

  const currentMealIsFav = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Ingredients : </Text>
        <Text>
          {selectedMeal.ingredients.map((ingredient, index) => (
            <Text key={index}>
              {ingredient} {"\n"}
            </Text>
          ))}{" "}
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Steps : </Text>
        <Text>
          {selectedMeal.steps.map((step, index) => (
            <Text key={index}>
              {step}
              {"\n"}
            </Text>
          ))}{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  title: {
    fontFamily: "Sriracha-Regular",
    fontSize: 20
  },
  wrapper: {
    backgroundColor: "#EEE",
    padding: 25,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    margin: 15,
    marginTop: 0
  }
});

export default MealDetailsScreen;
