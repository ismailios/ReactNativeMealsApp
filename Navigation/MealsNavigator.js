import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    fontFamily: "Sriracha-Regular"
  },
  headerBackTitleStyle: {
    fontFamily: "Sriracha-Regular"
  },
  headerTintColor: "white"
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabsScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accent
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary
    }
  }
};

const favTabBottomnavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeColor: "red",
        shifting: true
      })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
          // labelStyle: {
          //   fontFamily: "Sriracha-Regular"
          // },
          activeTintColor: Colors.primary
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: favTabBottomnavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: "red",
      labelStyle: {
        fontFamily: "Sriracha-Regular",
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
